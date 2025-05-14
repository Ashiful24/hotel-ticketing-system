import { BadRequestException, Injectable, Logger, NotFoundException, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TickettAssignmentDto } from './dto/ticket-assignment-dto';
import { TickettReassignmentDto } from './dto/ticket-reassignment-dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@Injectable()
export class TicketAssingmentService {
  private readonly logger = new Logger(TicketAssingmentService.name);
  constructor(private prismaService: PrismaService) { }


  async assignTicket(assignBy: number, assignDto: TickettAssignmentDto) {
    // Check if ticket is already assigned
    const existingAssignment = await this.prismaService.ticketAssignment.findUnique({
      where: { ticketId: assignDto.ticketId },
    });

    if (existingAssignment) {
       this.logger.warn(`Ticket with ID ${assignDto.ticketId} is already assigned.`);
      throw new BadRequestException('Ticket already assigned');
    }

    // Get the ticket 
    const ticket = await this.prismaService.tickets.findUnique({
      where: { id: assignDto.ticketId },

    })

    if (!ticket) {
       this.logger.error(`Ticket with ID ${assignDto.ticketId} not found.`);
      throw new BadRequestException("Ticket not found");  
    }

    // cheack the assignee  exist 
    const assignee = await this.prismaService.user.findUnique({
      where: { id: assignDto.assignTo }
    })
    if (!assignee) {
       this.logger.error(`Assignee with ID ${assignDto.assignTo} not found.`);
      throw new BadRequestException("assignee not found");
    } 

    // cheack assignee is staff
    const roles = await this.prismaService.user_userType.findMany({
      where: { userId: assignDto.assignTo },
      include: { userType: true },
    });

    const userRoles = roles.map(r => r.userType.userTypeName);

    if (!userRoles.includes("Staff")) {
      this.logger.error(`Assignee with ID ${assignDto.assignTo} is not a staff member.`);
      throw new BadRequestException("Assignee is not a staff member");
    }


    // Check if the ticket is currently Open
    if (ticket.currentStatusId !== 1) {
      this.logger.error(`Ticket with ID ${assignDto.ticketId} is not open.`);
      throw new BadRequestException('Ticket must be Open to assign it');
    }

    // Create new assignment
    const ticketAssignment = await this.prismaService.ticketAssignment.create({
      data: {
        ticketId: assignDto.ticketId,
        assignTo: assignDto.assignTo
      },
    });

    this.logger.log(`Ticket with ID ${assignDto.ticketId} successfully assigned to assignee with ID ${assignDto.assignTo}.`);

    // update ticket status
    await this.updateTicketStatus(assignDto.ticketId, 2, assignBy, "Your Ticket is now In Progress");

    this.logger.log(`Ticket with ID ${assignDto.ticketId} status updated to 'In Progress' by user with ID ${assignBy}.`);
    return ticketAssignment;

  }



  async reassignTicket(assignBy: number, reassignDto: TickettReassignmentDto) {
    // Check if assignment exists
    const assignment = await this.prismaService.ticketAssignment.findUnique({
      where: { ticketId: reassignDto.ticketId },
    });

    if (!assignment) {
      this.logger.warn(`No assignment found for ticket ID ${reassignDto.ticketId}`);
      throw new NotFoundException('No assignment found for this ticket');
    }


    // cheack the assignee  exist 
    const assignee = await this.prismaService.user.findUnique({
      where: { id: reassignDto.assignTo }
    })
    if (!assignee) {
       this.logger.error(`Assignee with ID ${reassignDto.assignTo} not found`);
      throw new BadRequestException("assignee not found");
    }

    // cheack assignee is staff
    const roles = await this.prismaService.user_userType.findMany({
      where: { userId: reassignDto.assignTo },
      include: { userType: true },
    });

    const userRoles = roles.map(r => r.userType.userTypeName);

    if (!userRoles.includes("Staff")) {
      this.logger.error(`Assignee with ID ${reassignDto.assignTo} is not a staff member`);
      throw new BadRequestException("Assignee is not a staff member");
    }

    // Prevent reassignment to the same person
    if (assignment.assignTo === reassignDto.assignTo) {
      this.logger.warn(
        `Ticket ID ${reassignDto.ticketId} is already assigned to user ID ${reassignDto.assignTo}`
      );
      throw new BadRequestException("Ticket is already assigned to this user");
    }

    // Update the assignment
    const reassingment = this.prismaService.ticketAssignment.update({
      where: { ticketId: reassignDto.ticketId },
      data: {
        assignTo: reassignDto.assignTo,
        assignedAt: new Date(),
      },
    });

    this.logger.log(
      `Ticket ID ${reassignDto.ticketId} successfully reassigned from user ID ${assignment.assignTo} to user ID ${reassignDto.assignTo}`
    );

    // update ticket status
    await this.updateTicketStatus(reassignDto.ticketId, 2, assignBy, "Ticket reassigned to new staff! Ticket is In Progress now");

     this.logger.log(
      `Ticket ID ${reassignDto.ticketId} status updated to 'In Progress' by user ID ${assignBy}`
    );
    return reassingment;
  }




  // a helper fuction that update the ticket status
  async updateTicketStatus(ticketId: number, statusId: number, changedBy: number, comment: string) {
    this.logger.log(
      `Updating status of ticket ID ${ticketId} to status ID ${statusId} by user ID ${changedBy}`
    );

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

    this.logger.log(`Ticket ID ${ticketId} status successfully updated to ID ${statusId}`);
  }




  async resolveTicket(ticketId: number, staffId: number, comment: string) {
    this.logger.log(`Staff ID ${staffId} is attempting to resolve ticket ID ${ticketId}`);

    // Get the ticket and validate assignment
    const ticket = await this.prismaService.tickets.findUnique({
      where: { id: ticketId },
      include: {
        assignment: true,
      },
    });

    if (!ticket) {
      this.logger.warn(`Ticket ID ${ticketId} not found`);
      throw new Error('Ticket not found');
    }

    const isAssigned = ticket.assignment.some(assignment => assignment.assignTo === staffId);
    if (!isAssigned) {
       this.logger.warn(`Staff ID ${staffId} is not assigned to ticket ID ${ticketId}`);
      throw new BadRequestException('You are not assigned to this ticket');
    }

    // Check current status
    if (ticket.currentStatusId !== 2) {
      this.logger.warn(`Ticket ID ${ticketId} is not in IN_PROGRESS status`);
      throw new BadRequestException('Ticket must be IN_PROGRESS to resolve it');
    }

    // Update status to RESOLVED (3)
    await this.updateTicketStatus(ticketId, 3, staffId, comment)

    this.logger.log(`Ticket ID ${ticketId} resolved by staff ID ${staffId}`);
    return { message: 'Ticket marked as resolved' };
  }




  async closedTicket(ticketId: number, staffId: number, comment: string) {
    this.logger.log(`Staff ID ${staffId} is attempting to close ticket ID ${ticketId}`);

    // Get the ticket and validate assignment
    const ticket = await this.prismaService.tickets.findUnique({
      where: { id: ticketId },
      include: {
        assignment: true,
      },
    });

    if (!ticket) {
       this.logger.warn(`Ticket ID ${ticketId} not found`);
      throw new BadRequestException('Ticket not found');
    }


    // Check current status
    if (ticket.currentStatusId !== 3) {
      this.logger.warn(
      `Ticket ID ${ticketId} is not in RESOLVED status. Current status ID: ${ticket.currentStatusId}`
    );
      throw new BadRequestException('Ticket must be Resloved to closed it');
    }

    // update status to closed
    await this.updateTicketStatus(ticketId, 4, staffId, comment);

    this.logger.log(`Ticket ID ${ticketId} successfully closed by staff ID ${staffId}`);
    return { message: 'Ticket marked as closed' };
  }


}
