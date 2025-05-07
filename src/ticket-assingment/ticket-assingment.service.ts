import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TickettAssignmentDto } from './dto/ticket-assignment-dto';
import { TickettReassignmentDto } from './dto/ticket-reassignment-dto';

@Injectable()
export class TicketAssingmentService {
    constructor(private prismaService: PrismaService) { }

    async assignTicket(assignDto: TickettAssignmentDto) {
        // Check if ticket is already assigned
        const existingAssignment = await this.prismaService.ticketAssignment.findUnique({
            where: { ticketId: assignDto.ticketId },
        });

        if (existingAssignment) {
            throw new BadRequestException('Ticket already assigned');
        }

        // Create new assignment
        return this.prismaService.ticketAssignment.create({
            data: {
                ticketId: assignDto.ticketId,
                assignTo: assignDto.assignTo
            },
        });

    }

    async reassignTicket(reassignDto: TickettReassignmentDto){
        // Check if assignment exists
  const assignment = await this.prismaService.ticketAssignment.findUnique({
    where: { ticketId : reassignDto.ticketId },
  });

  if (!assignment) {
    throw new NotFoundException('No assignment found for this ticket');
  }

   // Update the assignment
  return this.prismaService.ticketAssignment.update({
    where: { ticketId: reassignDto.ticketId },
    data: {
      assignTo: reassignDto.assignTo,
      assignedAt: new Date(), 
    },
  });

    }

    


}
