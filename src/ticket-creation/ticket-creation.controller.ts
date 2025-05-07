import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { TicketCreationService } from './ticket-creation.service';

@Controller('ticket-creation')
export class TicketCreationController {

    constructor(private ticketCreationService : TicketCreationService) {}

    @UseGuards(AuthGuard)
    @Post('add')
    async creatTicket(@Req() req, @Body() ticketDto: CreateTicketDto){
        const userId = req.user.id;
        return await this.ticketCreationService.createTicket(userId, ticketDto);
    }

    @UseGuards(AuthGuard)
    @Get('my-ticket')
    async myTickets(@Req() req) {
    const userId = req.user.id;
    return await this.ticketCreationService.getTicketsByUser(userId);
    }


}
