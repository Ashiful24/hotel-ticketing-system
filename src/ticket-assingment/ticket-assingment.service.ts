import { BadRequestException, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TickettAssignmentDto } from './dto/ticket-assignment-dto';
import { TickettReassignmentDto } from './dto/ticket-reassignment-dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@Injectable()
export class TicketAssingmentService {
  constructor(private prismaService: PrismaService) { }


  async assignTicket(assignBy: number, assignDto: TickettAssignmentDto) {
    // Check if ticket is already assigned
    const existingAssignment = await this.prismaService.ticketAssignment.findUnique({
      where: { ticketId: assignDto.ticketId },
    });

    if (existingAssignment) {
      throw new BadRequestException('Ticket already assigned');
    }

      // Get the ticket 
      const ticket = await this.prismaService.tickets.findUnique({
        where: { id: assignDto.ticketId },
      
      })

     if(!ticket) throw new BadRequestException("Ticket not found");

    // Check if the ticket is currently Open
    if (ticket.currentStatusId !== 1) {
      throw new Error('Ticket must be Open to assign it');
    }

    // Create new assignment
    const ticketAssignment = this.prismaService.ticketAssignment.create({
      data: {
        ticketId: assignDto.ticketId,
        assignTo: assignDto.assignTo
      },
    });

    // update ticket status
    await this.updateTicketStatus(assignDto.ticketId, 2, assignBy, "Your Ticket is now In Progress");

    return ticketAssignment;

  }

  async reassignTicket(assignBy: number, reassignDto: TickettReassignmentDto) {
    // Check if assignment exists
    const assignment = await this.prismaService.ticketAssignment.findUnique({
      where: { ticketId: reassignDto.ticketId },
    });

    if (!assignment) {
      throw new NotFoundException('No assignment found for this ticket');
    }

    // Update the assignment
    const reassingment = this.prismaService.ticketAssignment.update({
      where: { ticketId: reassignDto.ticketId },
      data: {
        assignTo: reassignDto.assignTo,
        assignedAt: new Date(),
      },
    });

    // update ticket status
    await this.updateTicketStatus(reassignDto.ticketId, 2, assignBy, "Your Ticket is now In Progress");

    return reassingment;
  }



  // a helper fuction that update the ticket status
  async updateTicketStatus(ticketId: number, statusId: number, changedBy: number, comment: string) {

    // add a new row into ticket status table
    await this.prismaService.ticketStatus.create({
      data: {
        ticketId: ticketId,
        statusId: statusId,
        changnedBy: changedBy,
        comment: comment

      },
    });

    await this.prismaService.tickets.update({
      where: { id: ticketId },
      data: {
        currentStatusId: statusId
      },
    });
  }

  async getAssignedTicketsForStaff(staffId: number) {
    const assignment = await this.prismaService.ticketAssignment.findMany({
      where: {
        assignTo: staffId,
      },
      include: {
        ticket: {
          include: {
            statusType: true, // if you want current status info
          },
        },
      },
    });

    return assignment.map(a => a.ticket);
  }


  async resolveTicket(ticketId: number, staffId: number, comment: string) {
    // Get the ticket and validate assignment
    const ticket = await this.prismaService.tickets.findUnique({
      where: { id: ticketId },
      include: {
        assignment: true,
      },
    });

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    const isAssigned = ticket.assignment.some(assignment => assignment.assignTo === staffId);
    if (!isAssigned) {
      throw new BadRequestException('You are not assigned to this ticket');
    }

    // Check current status
    if (ticket.currentStatusId !== 2) {
      throw new BadRequestException('Ticket must be IN_PROGRESS to resolve it');
    }

    // Update status to RESOLVED (3)
    await this.updateTicketStatus(ticketId, 3, staffId, comment)

    return { message: 'Ticket marked as resolved' };
  }

  async closedTicket(ticketId: number, staffId: number, comment: string) {
    // Get the ticket and validate assignment
    const ticket = await this.prismaService.tickets.findUnique({
      where: { id: ticketId },
      include: {
        assignment: true,
      },
    });

    if (!ticket) {
      throw new BadRequestException('Ticket not found');
    }


    // Check current status
    if (ticket.currentStatusId !== 3) {
      throw new BadRequestException('Ticket must be Resloved to closed it');
    }

    // update status to closed
    await this.updateTicketStatus(ticketId, 4, staffId, comment);

    return { message: 'Ticket marked as closed' };
  }


}
