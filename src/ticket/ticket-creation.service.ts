import { PrismaService } from '@/prisma.service';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Priority, TicketStatus, UserType } from '@prisma/client';
import { AssignTicketDto } from './dto/assign-ticket-dto';
import { ChangeTicketStatusDto } from './dto/change-ticket-status-dto';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { UpdateTicketDto } from './dto/update-ticket-dto';

const STAFF_TRANSITIONS: Partial<Record<TicketStatus, TicketStatus[]>> = {
  [TicketStatus.ASSIGNED]: [TicketStatus.IN_PROGRESS],
  [TicketStatus.IN_PROGRESS]: [TicketStatus.ON_HOLD, TicketStatus.DONE],
  [TicketStatus.ON_HOLD]: [TicketStatus.IN_PROGRESS],
};

const SUPERVISOR_TRANSITIONS: Partial<Record<TicketStatus, TicketStatus[]>> = {
  [TicketStatus.DONE]: [TicketStatus.VERIFIED],
};

const FRONTDESK_TRANSITIONS: Partial<Record<TicketStatus, TicketStatus[]>> = {
  [TicketStatus.VERIFIED]: [TicketStatus.CLOSED],
  [TicketStatus.CLOSED]: [TicketStatus.REOPENED],
};

@Injectable()
export class TicketCreationService {
  private readonly logger = new Logger(TicketCreationService.name);

  constructor(private prismaService: PrismaService) {}

  async createTicket(userId: number, ticketDto: CreateTicketDto) {
    this.logger.log(`Starting ticket creation for user ID: ${userId}`);

    try {
      const ticket = await this.prismaService.ticket.create({
        data: {
          creatorId: userId,
          ticketCode: `TICKET-${Date.now()}`,
          roomNumber: ticketDto.roomNumber,
          title: ticketDto.title,
          description: ticketDto.description,
          priority: ticketDto.priority,
          departmentId: ticketDto.departmentId,
          status: TicketStatus.OPEN, // Assuming OPEN is the initial status ID for new tickets
        },
      });
      this.logger.log(`Ticket created successfully with ID: ${ticket.id}`);

      await this.prismaService.ticketStatusHistory.create({
        data: {
          ticketId: ticket.id,
          status: TicketStatus.OPEN,
          changedBy: userId,
        },
      });

      return ticket;
    } catch (error) {
      this.logger.error(`Failed to create ticket for user ID: ${userId}`);
      throw error;
    }
  }

  async updateTicketsById(id: number, updateDto: UpdateTicketDto) {
    this.logger.log(`Attempting to update ticket with ID: ${id}`);

    const existingTicket = await this.prismaService.ticket.findUnique({
      where: { id },
    });

    if (!existingTicket) {
      this.logger.warn(`Ticket with ID ${id} not found for update`);
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    const updateTicket = await this.prismaService.ticket.update({
      where: { id: id },
      data: updateDto,
    });

    this.logger.log(`Ticket with ID ${id} successfully updated`);
    return updateTicket;
  }

  async assignTicket(
    supervisorId: number,
    ticketId: number,
    assignDto: AssignTicketDto,
  ) {
    const supervisor = await this.prismaService.user.findUnique({
      where: { id: supervisorId },
      include: { Department: true },
    });

    if (!supervisor) {
      throw new UnauthorizedException('User not found');
    }

    if (supervisor.userType !== UserType.SUPERVISOR) {
      throw new ForbiddenException('Only supervisors can assign tickets');
    }

    if (!supervisor.Department) {
      throw new BadRequestException(
        'Supervisor is not linked to any department',
      );
    }

    const ticket = await this.prismaService.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.departmentId !== supervisor.Department.id) {
      throw new ForbiddenException(
        'You can only assign tickets from your own department',
      );
    }

    if (
      ticket.status === TicketStatus.CLOSED ||
      ticket.status === TicketStatus.CANCELLED
    ) {
      throw new BadRequestException(
        `Cannot assign a ticket with status ${ticket.status}`,
      );
    }

    const staff = await this.prismaService.user.findUnique({
      where: { id: assignDto.staffId },
    });

    if (!staff) {
      throw new NotFoundException('Staff user not found');
    }

    if (staff.userType !== UserType.STAFF) {
      throw new BadRequestException('Ticket can only be assigned to STAFF users');
    }

    const staffRoleInDepartment =
      await this.prismaService.staffRole.findFirst({
        where: {
          staffId: assignDto.staffId,
          role: {
            departmentId: ticket.departmentId,
          },
        },
      });

    if (!staffRoleInDepartment) {
      throw new BadRequestException(
        'Staff has no role assigned in this department',
      );
    }

    const updatedTicket = await this.prismaService.ticket.update({
      where: { id: ticketId },
      data: {
        assignTo: assignDto.staffId,
        assignBy: supervisorId,
        assignAt: new Date(),
        deadline: assignDto.deadline,
        status: TicketStatus.ASSIGNED,
      },
    });

    await this.prismaService.ticketStatusHistory.create({
      data: {
        ticketId,
        status: TicketStatus.ASSIGNED,
        changedBy: supervisorId,
      },
    });

    this.logger.log(
      `Ticket ${ticketId} assigned to staff ${assignDto.staffId} by supervisor ${supervisorId}`,
    );

    return updatedTicket;
  }

  async changeTicketStatus(
    userId: number,
    ticketId: number,
    dto: ChangeTicketStatusDto,
  ) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
      include: { Department: true },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const ticket = await this.prismaService.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.status === dto.status) {
      throw new BadRequestException(`Ticket is already ${dto.status}`);
    }

    if (ticket.status === TicketStatus.CANCELLED) {
      throw new BadRequestException(
        'Cancelled tickets cannot be changed or reopened',
      );
    }

    const nextStatus = dto.status;

    if (user.userType === UserType.STAFF) {
      this.assertStaffCanChangeStatus(ticket, userId, nextStatus);
    } else if (user.userType === UserType.SUPERVISOR) {
      this.assertSupervisorCanChangeStatus(ticket, user.Department?.id, nextStatus);
    } else if (user.userType === UserType.FRONTDESK) {
      this.assertFrontdeskCanChangeStatus(ticket, nextStatus);
    } else {
      throw new ForbiddenException(
        'You are not allowed to change ticket status',
      );
    }

    const updatedTicket = await this.prismaService.ticket.update({
      where: { id: ticketId },
      data: { status: nextStatus },
    });

    await this.prismaService.ticketStatusHistory.create({
      data: {
        ticketId,
        status: nextStatus,
        changedBy: userId,
      },
    });

    this.logger.log(
      `Ticket ${ticketId} status changed ${ticket.status} -> ${nextStatus} by user ${userId}`,
    );

    return updatedTicket;
  }

  private assertStaffCanChangeStatus(
    ticket: { assignTo: number | null; status: TicketStatus },
    staffId: number,
    nextStatus: TicketStatus,
  ) {
    if (ticket.assignTo !== staffId) {
      throw new ForbiddenException(
        'Staff can only change status of tickets assigned to them',
      );
    }

    const allowed = STAFF_TRANSITIONS[ticket.status] ?? [];
    if (!allowed.includes(nextStatus)) {
      throw new BadRequestException(
        `Staff cannot change status from ${ticket.status} to ${nextStatus}`,
      );
    }
  }

  private assertSupervisorCanChangeStatus(
    ticket: { departmentId: number; status: TicketStatus },
    supervisorDepartmentId: number | undefined,
    nextStatus: TicketStatus,
  ) {
    if (!supervisorDepartmentId) {
      throw new BadRequestException(
        'Supervisor is not linked to any department',
      );
    }

    if (ticket.departmentId !== supervisorDepartmentId) {
      throw new ForbiddenException(
        'You can only verify tickets from your own department',
      );
    }

    const allowed = SUPERVISOR_TRANSITIONS[ticket.status] ?? [];
    if (!allowed.includes(nextStatus)) {
      throw new BadRequestException(
        `Supervisor can only change DONE tickets to VERIFIED`,
      );
    }
  }

  private assertFrontdeskCanChangeStatus(
    ticket: { status: TicketStatus },
    nextStatus: TicketStatus,
  ) {
    // Frontdesk may cancel at any time (except already CANCELLED, handled above)
    if (nextStatus === TicketStatus.CANCELLED) {
      return;
    }

    const allowed = FRONTDESK_TRANSITIONS[ticket.status] ?? [];
    if (!allowed.includes(nextStatus)) {
      throw new BadRequestException(
        `Frontdesk cannot change status from ${ticket.status} to ${nextStatus}`,
      );
    }
  }

  async getTicketDetailsById(id: number) {
    this.logger.log(`Fetching ticket details for ID: ${id}`);

    const ticket = await this.prismaService.ticket.findUnique({
      where: { id: id },
      include: {
        history: true,
      },
    });

    if (!ticket) {
      this.logger.warn(`Ticket with ID ${id} not found`);
      throw new NotFoundException('Ticket not found');
    }

    this.logger.log(`Ticket with ID ${id} found successfully`);

    return ticket;
  }

  async getAllTicketDetails(
    userId: number,
    page: number,
    limit: number,
    filters: {
      priority?: Priority;
      date?: Date;
      departmentId?: number;
    },
    tab?: TicketStatus,
    searchQuery?: number,
    searchField?: 'ticketId' | 'creatorId' | 'assignTo',
  ) {
    this.logger.log(
      `Fetching tickets for user ${userId} (Page: ${page}, Limit: ${limit})`,
    );

    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
      include: { Department: true },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const where: any = {};
    const skip = (page - 1) * limit;
    const isPrivileged =
      user.userType === UserType.ADMIN ||
      user.userType === UserType.FRONTDESK;

    if (user.userType === UserType.STAFF) {
      where.assignTo = userId;
    } else if (user.userType === UserType.SUPERVISOR) {
      const scope: Array<{ departmentId?: number; assignTo?: number }> = [
        { assignTo: userId },
      ];
      if (user.Department?.id) {
        scope.unshift({ departmentId: user.Department.id });
      }
      where.OR = scope;
    }

    if (searchQuery && searchField) {
      this.logger.log(
        `Applying search query: ${searchQuery} on field: ${searchField}`,
      );
      if (searchField === 'ticketId') {
        where.id = searchQuery;
      } else if (searchField === 'creatorId') {
        where.creatorId = searchQuery;
      } else if (searchField === 'assignTo') {
        if (isPrivileged) {
          where.assignTo = searchQuery;
        } else if (user.userType === UserType.STAFF) {
          // Staff can only ever see their own assignments
          where.assignTo = userId;
        } else if (user.userType === UserType.SUPERVISOR) {
          // Keep department OR assigned-to-me scope; narrow assign search inside it
          where.AND = [
            { OR: where.OR },
            { assignTo: searchQuery },
          ];
          delete where.OR;
        }
      }
    }

    if (tab) {
      where.status = tab;
    }

    if (filters.priority) {
      where.priority = filters.priority;
    }

    if (filters.date) {
      const selectedDate = new Date(filters.date);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(selectedDate.getDate() + 1);

      where.createdAt = {
        gte: selectedDate,
        lt: nextDay,
      };
    }

    // Only ADMIN / FRONTDESK may filter by arbitrary departmentId
    if (filters.departmentId && isPrivileged) {
      where.departmentId = filters.departmentId;
    }

    this.logger.log('Fetching tickets from the database...');
    const tickets = await this.prismaService.ticket.findMany({
      where,
      take: limit,
      skip: skip,
    });

    const totalCount = await this.prismaService.ticket.count({
      where,
    });
    this.logger.log(`Found ${tickets.length} tickets`);

    return {
      data: tickets,
      currentPage: page,
      itemPerPage: limit,
      totalItem: totalCount,
      totalPages: Math.ceil(totalCount / limit),
    };
  }
}
