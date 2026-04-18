import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { TicketStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { UpdateTicketDto } from './dto/update-ticket-dto';

@Injectable()
export class TicketCreationService {

  private readonly logger = new Logger(TicketCreationService.name);

  constructor(private prismaService: PrismaService) { }

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
      return ticket;
    } catch (error) {
      this.logger.error(
        `Failed to create ticket for user ID: ${userId}`,
      );
      throw error;
    }

  }

  async getTicketsById(userId: number) {

    this.logger.log(`Fetching ticket with ID: ${userId}`);

    const existingTicket = await this.prismaService.ticket.findUnique({
      where: { id: userId },
      select: {
        roomNumber: true,
        title: true,
        description: true,

      }
    });

    if (!existingTicket) {
      this.logger.warn(`Ticket with ID ${userId} not found`);
      throw new NotFoundException(`Ticket with ID ${userId} not found`);
    }

    this.logger.log(`Ticket with ID ${userId} retrieved successfully`);
    return existingTicket;

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
      data: updateDto
    })

    this.logger.log(`Ticket with ID ${id} successfully updated`);
    return updateTicket;

  }




  async deleteTicketsById(id: number) {
    this.logger.log(`Attempting to delete ticket with ID: ${id}`);

    const existingTicket = await this.prismaService.ticket.findUnique({
      where: { id },
    });

    if (!existingTicket) {
      this.logger.warn(`Delete failed: Ticket with ID ${id} not found`);
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    await this.prismaService.ticket.delete({
      where: { id: id }
    })

    this.logger.log(`Ticket with ID ${id} successfully deleted`);
    return { message: `Ticket with ID ${id} has been deleted successfully.` };

  }







  async getTicketDetailsById(id: number) {
    this.logger.log(`Fetching ticket details for ID: ${id}`);

    const ticket = await this.prismaService.ticket.findUnique({
      where: { id: id },

    })

    if (!ticket) {
      this.logger.warn(`Ticket with ID ${id} not found`);
      throw new NotFoundException("Ticket not found");
    }

    this.logger.log(`Ticket with ID ${id} found successfully`);


    return ticket;

  }


  async getAllTicketDetails(
    page: number,
    limit: number,
    filters: {
      issueCategoryId?: number;
      issueTypeId?: number;
      priorityId?: number;
      statusId?: number;
      date?: Date;
    },
    tab?: 'unassigned' | 'resolved' | 'due',
    searchQuery?: number,
    searchField?: 'ticketId' | 'creatorId' | 'assigneeId'
  ) {
    this.logger.log(`Fetching all tickets (Page: ${page}, Limit: ${limit})`);

    const where: any = {};
    const skip = (page - 1) * limit;

    if (searchQuery && searchField) {
      this.logger.log(`Applying search query: ${searchQuery} on field: ${searchField}`);
      if (searchField === 'ticketId') {
        where.id = searchQuery
      } else if (searchField === 'creatorId') {
        where.creatorId = searchQuery
      } else if (searchField === 'assigneeId') {
        where.assignment = {
          some: {
            staff: {
              id: searchQuery
            }
          }
        };
      }
    }



    if (tab === 'unassigned') {
      this.logger.log('Filtering for unassigned tickets');
      where.assignment = { none: {} };
    } else if (tab === 'resolved') {
      this.logger.log('Filtering for resolved tickets');
      where.currentStatusId = 3;
    } else if (tab === 'due') {
      this.logger.log('Filtering for due tickets');
      where.currentStatusId = { in: [1, 2, 5] };
    }


    if (filters.priorityId) {
      this.logger.log(`Filtering by priorityId: ${filters.priorityId}`);
      where.priorityId = filters.priorityId;
    }

    if (filters.issueCategoryId) {
      this.logger.log(`Filtering by issueCategoryId: ${filters.issueCategoryId}`);
      where.issueType = {
        department: {
          id: filters.issueCategoryId
        }
      };
    }

    if (filters.issueTypeId) {
      this.logger.log(`Filtering by issueTypeId: ${filters.issueTypeId}`);
      where.issueTypeId = filters.issueTypeId;
    }

    if (filters.statusId) {
      this.logger.log(`Filtering by statusId: ${filters.statusId}`);
      where.currentStatusId = filters.statusId;
    }

    if (filters.date) {
      this.logger.log(`Filtering by date: ${filters.date}`);
      const selectedDate = new Date(filters.date);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(selectedDate.getDate() + 1);

      where.createdAt = {
        gte: selectedDate,
        lt: nextDay
      };
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
      totalPages: Math.ceil(totalCount / limit)

    }
  }



}
