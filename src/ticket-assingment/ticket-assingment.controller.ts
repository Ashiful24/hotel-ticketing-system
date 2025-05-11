import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TicketAssingmentService } from './ticket-assingment.service';
import { TickettAssignmentDto } from './dto/ticket-assignment-dto';
import { TickettReassignmentDto } from './dto/ticket-reassignment-dto';
import { RolesGuard } from 'src/roles/roles.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';

@Controller('ticket')
export class TicketAssingmentController {

    constructor(private ticketService: TicketAssingmentService) { }


    @UseGuards(AuthGuard, RolesGuard)
    @Roles("Manager", "Admin")
    @Post('/assign')
    async assignmentTicket(@Req() req, @Body() assignDto: TickettAssignmentDto) {
        const assignBy = req.user.id
        console.log(assignBy);
        return this.ticketService.assignTicket(assignBy, assignDto);

    }

    @UseGuards(AuthGuard, RolesGuard)
    @Roles("Manager", "Admin")
    @Put('/reassign')
    async reassignmentTicket(@Req() req, @Body() reassignDto: TickettReassignmentDto) {
        const assignBy = req.user.id
        return this.ticketService.reassignTicket(assignBy, reassignDto);

    }

    @Get('my-assigned-tickets')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("Staff")
    async getMyAssignedTickets(@Req() req) {
        const staffId = req.user.id; // assuming you set this from login/JWT
        return this.ticketService.getAssignedTicketsForStaff(staffId);
    }

    @Put('resolve/:id')
    @UseGuards(AuthGuard , RolesGuard)
    @Roles("Staff")
    async resolveTicket(@Param('id', ParseIntPipe) id: number, @Req() req) {
        const staffId = req.user.id;
        return this.ticketService.resolveTicket(id, staffId, "Your ticket has been resloved now");
    }

    @Put('closed/:id')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("Admin", "Guest")
    async closedTicket(@Param('id', ParseIntPipe) id: number, @Req() req) {
        const staffId = req.user.id;
        return this.ticketService.closedTicket(id, staffId, "Your ticket has been Closed");
    }






}
