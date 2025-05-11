import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { TicketCreationService } from './ticket-creation.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';

@Controller('ticket')
export class TicketCreationController {

    constructor(private ticketCreationService : TicketCreationService) {}

    @UseGuards(AuthGuard)
    @Post('add')
    async creatTicket(@Req() req, @Body() ticketDto: CreateTicketDto){
        const userId = req.user.id;
        return await this.ticketCreationService.createTicket(userId, ticketDto);
    }

    @UseGuards(AuthGuard, RolesGuard)
    @Roles("Guest", "Staff")
    @Get('my-ticket')
    async myTickets(@Req() req) {
    const userId = req.user.id;
    return await this.ticketCreationService.getTicketsByUser(userId);
    }

    @Put('reopen/:id')
@UseGuards(AuthGuard)
async reopenTicket(@Param('id', ParseIntPipe) id: number, @Req() req) {
  const userId = req.user.id;
  return this.ticketCreationService.reopenTicket(id, userId, "Your Ticket has been Reopened Successfully");
}



}
