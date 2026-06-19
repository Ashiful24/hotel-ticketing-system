import { PrismaService } from '@/prisma.service';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Priority, TicketStatus } from '@prisma/client';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { UpdateTicketDto } from './dto/update-ticket-dto';

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
    page: number,
    limit: number,
    filters: {
      priority?: Priority;
      date?: Date;
      departmentId?: number;
    },
    tab?: TicketStatus,
    searchQuery?: number,
    searchField?: 'ticketId' | 'creatorId' | 'assigneeId',
  ) {
    this.logger.log(`Fetching all tickets (Page: ${page}, Limit: ${limit})`);

    const where: any = {};
    const skip = (page - 1) * limit;

    if (searchQuery && searchField) {
      this.logger.log(
        `Applying search query: ${searchQuery} on field: ${searchField}`,
      );
      if (searchField === 'ticketId') {
        where.id = searchQuery;
      } else if (searchField === 'creatorId') {
        where.creatorId = searchQuery;
      } else if (searchField === 'assigneeId') {
        where.assignment = {
          some: {
            staff: {
              id: searchQuery,
            },
          },
        };
      }
    }

    if (tab === TicketStatus.OPEN) {
      this.logger.log('Filtering for unassigned tickets');
      where.status = TicketStatus.OPEN;
    } else if (tab === TicketStatus.ASSIGNED) {
      this.logger.log('Filtering for assigned tickets');
      where.status = TicketStatus.ASSIGNED;
    } else if (tab === TicketStatus.IN_PROGRESS) {
      this.logger.log('Filtering for running tickets');
      where.status = TicketStatus.IN_PROGRESS;
    } else if (tab === TicketStatus.DONE) {
      this.logger.log('Filtering for complete tickets');
      where.status = TicketStatus.DONE;
    } else if (tab === TicketStatus.VERIFIED) {
      this.logger.log('Filtering for varified tickets');
      where.status = TicketStatus.VERIFIED;
    } else if (tab === TicketStatus.CLOSED) {
      this.logger.log('Filtering for colse tickets');
      where.status = TicketStatus.CLOSED;
    } else if (tab === TicketStatus.REOPENED) {
      this.logger.log('Filtering for reopne tickets');
      where.status = TicketStatus.REOPENED;
    } else if (tab === TicketStatus.CANCELLED) {
      this.logger.log('Filtering for cancelled tickets');
      where.status = TicketStatus.CANCELLED;
    }

    if (filters.priority) {
      this.logger.log(`Filtering by priorityId: ${filters.priority}`);
      where.priority = filters.priority;
    }

    if (filters.date) {
      this.logger.log(`Filtering by date: ${filters.date}`);
      const selectedDate = new Date(filters.date);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(selectedDate.getDate() + 1);

      where.createdAt = {
        gte: selectedDate,
        lt: nextDay,
      };
    }

    if (filters.departmentId) {
      this.logger.log(`Filtering by priorityId: ${filters.priority}`);
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

    this.logger.log('Returning formatted ticket details');
    return {
      data: tickets,
      currentPage: page,
      itemPerPage: limit,
      totalItem: totalCount,
      totalPages: Math.ceil(totalCount / limit),
    };
  }
}
