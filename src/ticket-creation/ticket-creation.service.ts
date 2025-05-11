import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { create } from 'domain';

@Injectable()
export class TicketCreationService {

    constructor (private prismaService : PrismaService){}

    async createTicket(userId : number, ticketDto: CreateTicketDto){

        const ticket = await this.prismaService.tickets.create({
            data : {
                creatorId: userId,
                ticketCode: `TICKET-${Date.now()}`,
                roomNumber: ticketDto.roomNumber,
                title: ticketDto.title,
                description: ticketDto.description,
                priorityId:  ticketDto.priorityId,
                issueTypeId: ticketDto.issueTypeId,
                currentStatusId: 1,
                statuses :{
                    create: {
                        statusId: 1 ,
                        changnedBy: userId,
                        comment: "Your ticket has been created",
                    }
                }




            },
        });
        return ticket;
    }

    async getTicketsByUser(userId: number){
        return this.prismaService.tickets.findMany({
            where: { creatorId : userId },
            include: {
              priority:true,
              issueType: true,
              statuses: true
            },
          });
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
      


}
