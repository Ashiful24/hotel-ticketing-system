import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { create } from 'domain';
import { UpdateTicketDto } from './dto/update-ticket-dto';

@Injectable()
export class TicketCreationService {
   
   private readonly logger = new Logger(TicketCreationService.name);

   constructor(private prismaService: PrismaService) { }

  async createTicket(userId: number, ticketDto: CreateTicketDto) {
    this.logger.log(`Starting ticket creation for user ID: ${userId}`);

    try {
      const ticket = await this.prismaService.tickets.create({
        data: {
          creatorId: userId,
          ticketCode: `TICKET-${Date.now()}`,
          roomNumber: ticketDto.roomNumber,
          title: ticketDto.title,
          description: ticketDto.description,
          priorityId: ticketDto.priorityId,
          issueTypeId: ticketDto.issueTypeId,
          currentStatusId: 1,
          statuses: {
            create: {
              statusId: 1,
              changnedBy: userId,
              comment: "Your ticket has been created",
            }
          }
        },
      });
      this.logger.log(`Ticket created successfully with ID: ${ticket.id}`);
      return ticket;
    } catch (error) {
      this.logger.error(
        `Failed to create ticket for user ID: ${userId}`,
        error.stack,
      );
      throw error;
    }

  }

  async getTicketsById(userId: number) {

     this.logger.log(`Fetching ticket with ID: ${userId}`);

     const existingTicket = await this.prismaService.tickets.findUnique({
      where: { id: userId },
      select:{
        roomNumber: true,
        title:true,
        description:true,
        priorityId: true,
        issueTypeId: true
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

    const existingTicket = await this.prismaService.tickets.findUnique({
      where: { id },
    });

    if (!existingTicket) {
      this.logger.warn(`Ticket with ID ${id} not found for update`);
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    const updateTicket = await this.prismaService.tickets.update({
      where: { id: id },
      data: updateDto
    })

    this.logger.log(`Ticket with ID ${id} successfully updated`);
    return updateTicket;

  }




  async deleteTicketsById(id: number){
    this.logger.log(`Attempting to delete ticket with ID: ${id}`);

    const existingTicket = await this.prismaService.tickets.findUnique({
      where: { id },
    });

    if (!existingTicket) {
      this.logger.warn(`Delete failed: Ticket with ID ${id} not found`);
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    await this.prismaService.tickets.delete({
      where: {id: id}
    })

    this.logger.log(`Ticket with ID ${id} successfully deleted`);
    return { message: `Ticket with ID ${id} has been deleted successfully.` };

  }



  async reopenTicket(ticketId: number, userId: number, comment?: string) {
    this.logger.log(`User ${userId} is attempting to reopen ticket ${ticketId}`);

    // Get the ticket with creator info
    const ticket = await this.prismaService.tickets.findUnique({
      where: { id: ticketId },
      select: {
        id: true,
        creatorId: true,
        currentStatusId: true,
      },
    });

    if (!ticket) {
      this.logger.warn(`Ticket with ID ${ticketId} not found`);
      throw new BadRequestException('Ticket not found');
    }

    // Check if the user is the creator
    if (ticket.creatorId !== userId) {
      this.logger.warn(`User ${userId} is not authorized to reopen ticket ${ticketId}`);
      throw new BadRequestException('Only the creator of this ticket can reopen it');
    }

    // Check if the ticket is currently CLOSED
    if (ticket.currentStatusId !== 4) {
      this.logger.warn(`Ticket ${ticketId} is not CLOSED (current status: ${ticket.currentStatusId})`);
      throw new BadRequestException('Ticket must be CLOSED to reopen it');
    }

    // Add to status history
    await this.prismaService.ticketStatus.create({
      data: {
        ticketId,
        statusId: 5, // REOPENED
        changnedBy: userId,
        comment: comment ?? 'Ticket reopened by creator',
      },
    });

    // Update current status
    await this.prismaService.tickets.update({
      where: { id: ticketId },
      data: {
        currentStatusId: 5,
      },
    });

     this.logger.log(`Ticket ${ticketId} reopened by user ${userId}`);
    return { message: 'Ticket reopened successfully' };
  }




  async getTicketDetailsById(id: number) {
    this.logger.log(`Fetching ticket details for ID: ${id}`);

    const ticket = await this.prismaService.tickets.findUnique({
      where: { id: id },
      include: {
        issueType: {
          include: {
            department: true
          }
        },
        priority: true,
        user: true,
        assignment: {
          include: {
            staff: {
              select: {
                firstName: true,
                email: true
              }
            }
          }
        },
        statuses: {
          include: {
            status: true,
            user: {
              select: {
                firstName: true,
              }
            }
          }
        }
      }
    })

    if (!ticket){
       this.logger.warn(`Ticket with ID ${id} not found`);
       throw new NotFoundException("Ticket not found");
    } 

     this.logger.log(`Ticket with ID ${id} found successfully`);

    const formattedTicket = {
      ticketID: ticket.id,
      ticketCode: ticket.ticketCode,
      roomNumber: ticket.roomNumber,
      title: ticket.title,
      description: ticket.description,
      createdAt: ticket.createdAt,

      issueTypeName: ticket.issueType.name,
      issueCategoryName: ticket.issueType.department.departmentName,

      priority: ticket.priority.name,

      creatorName: ticket.user.firstName,
      creatorEmail: ticket.user.email,

      assigneeName: ticket.assignment?.[0]?.staff.firstName,
      assigneeEmail: ticket.assignment?.[0]?.staff.email,

      statusHistory: ticket.statuses.map(s => ({
        status: s.status.name,
        changedBy: s.user.firstName,
        changedAt: s.changedAt,
        comment: s.comment
      })),

    }

    return formattedTicket;

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
      where.currentStatusId = { in: [1,2,5] };
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
    const tickets = await this.prismaService.tickets.findMany({
      where,
      take: limit,
      skip: skip,
      include: {
        priority: true,
        statusType: true,
        issueType: {
          include: {
            department: true
          }
        },
        user: true,
        assignment: {
          include: {
            staff: {
              select: {
                firstName: true
              }
            }
          }
        },

      }
    });

    const totalCount = await this.prismaService.tickets.count({
      where,
    });
    this.logger.log(`Found ${tickets.length} tickets`);

    const formattedDetails = tickets.map(ticket => ({
      ticketId: ticket.id,
      ticketCode: ticket.ticketCode,
      date: ticket.createdAt,
      issueType: ticket.issueType.name,
      issueCategory: ticket.issueType.department.departmentName,
      priority: ticket.priority.name,
      status: ticket.statusType.name,
      creator: ticket.user.firstName,
      assignTo: ticket.assignment?.[0]?.staff.firstName ?? 'Unassigned',

    }))

    this.logger.log('Returning formatted ticket details');
    return {
      data: formattedDetails,
      currentPage: page,
      itemPerPage: limit,
      totalItem: totalCount,
      totalPages: Math.ceil(totalCount / limit)

    }
  }



}
