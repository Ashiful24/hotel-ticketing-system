import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { create } from 'domain';
import { UpdateTicketDto } from './dto/update-ticket-dto';

@Injectable()
export class TicketCreationService {

  constructor(private prismaService: PrismaService) { }

  async createTicket(userId: number, ticketDto: CreateTicketDto) {

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
    return ticket;
  }

  async getTicketsById(userId: number) {
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
      throw new NotFoundException(`Ticket with ID ${userId} not found`);
    }

    return existingTicket;

  }



  async updateTicketsById(id: number, updateDto: UpdateTicketDto) {

    const existingTicket = await this.prismaService.tickets.findUnique({
      where: { id },
    });

    if (!existingTicket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }


    return await this.prismaService.tickets.update({
      where: { id: id },
      data: updateDto
    })
  }




  async deleteTicketsById(id: number){
    const existingTicket = await this.prismaService.tickets.findUnique({
      where: { id },
    });

    if (!existingTicket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    await this.prismaService.tickets.delete({
      where: {id: id}
    })

    return { message: `Ticket with ID ${id} has been deleted successfully.` };

  }



  async reopenTicket(ticketId: number, userId: number, comment?: string) {
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
      throw new Error('Ticket not found');
    }

    // Check if the user is the creator
    if (ticket.creatorId !== userId) {
      throw new Error('Only the creator of this ticket can reopen it');
    }

    // Check if the ticket is currently CLOSED
    if (ticket.currentStatusId !== 4) {
      throw new Error('Ticket must be CLOSED to reopen it');
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

    return { message: 'Ticket reopened successfully' };
  }

  async getTicketDetailsById(id: number) {

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

    if (!ticket) throw new NotFoundException("Ticket not found");

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

    const where: any = {};
    const skip = (page - 1) * limit;

    if (searchQuery && searchField) {
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
      where.assignment = { none: {} };
    } else if (tab === 'resolved') {
      where.currentStatusId = 3;
    } else if (tab === 'due') {
      where.currentStatusId = { in: [1,2,5] };
    }


    if (filters.priorityId) {
      where.priorityId = filters.priorityId;
    }

    if (filters.issueCategoryId) {
      where.issueType = {
        department: {
          id: filters.issueCategoryId
        }
      };
    }

    if (filters.issueTypeId) {
      where.issueTypeId = filters.issueTypeId;
    }

    if (filters.statusId) {
      where.currentStatusId = filters.statusId;
    }

    if (filters.date) {
      const selectedDate = new Date(filters.date);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(selectedDate.getDate() + 1);

      where.createdAt = {
        gte: selectedDate,
        lt: nextDay
      };
    }


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
    return {
      data: formattedDetails,
      currentPage: page,
      itemPerPage: limit,
      totalItem: totalCount,
      totalPages: Math.ceil(totalCount / limit)

    }
  }



}
