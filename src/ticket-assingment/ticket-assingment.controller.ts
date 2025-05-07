import { Body, Controller, Post, Put } from '@nestjs/common';
import { TicketAssingmentService } from './ticket-assingment.service';
import { TickettAssignmentDto } from './dto/ticket-assignment-dto';
import { TickettReassignmentDto } from './dto/ticket-reassignment-dto';

@Controller('ticket-assingment')
export class TicketAssingmentController {

    constructor(private ticketService : TicketAssingmentService){}


    @Post('/assign')
    async assignmentTicket(@Body() assignDto : TickettAssignmentDto){

        return this.ticketService.assignTicket(assignDto);

    }

    @Put('/reassign')
    async reassignmentTicket(@Body() reassignDto : TickettReassignmentDto){

        return this.ticketService.reassignTicket(reassignDto);

    }

}
