import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';

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
                issueTypeId: ticketDto.issueTypeId


            },
        });
        return ticket;
    }

    async getTicketsByUser(userId: number){
        return this.prismaService.tickets.findMany({
            where: { creatorId : userId },
            include: {
              priority: true,
              issueType: true,
            },
          });
    }

    


}
