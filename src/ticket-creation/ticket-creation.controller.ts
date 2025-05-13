import { BadRequestException, Body, Controller, DefaultValuePipe, Get, Param, ParseDatePipe, ParseIntPipe, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { TicketCreationService } from './ticket-creation.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';

@Controller('ticket')
export class TicketCreationController {

  constructor(private ticketCreationService: TicketCreationService) { }

  @UseGuards(AuthGuard)
  @Post('create')
  async creatTicket(@Req() req, @Body() ticketDto: CreateTicketDto) {
    const userId = req.user.id;
    return await this.ticketCreationService.createTicket(userId, ticketDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("Guest", "Staff")
  @Get('guest-tickets')
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

  @Get("details/:id")
  async getTicketDetails(@Param('id', ParseIntPipe) id: number){
     return this.ticketCreationService.getTicketDetailsById(id);
  }

  @Get("list")
  async getAllTicketDetails(
   @Query('page', new DefaultValuePipe(1), ParseIntPipe ) page: number,
   @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
   @Query('tab') tab?: 'unassigned' | 'resolved' | 'due',
   @Query('searchQuery', new ParseIntPipe({ optional: true })) searchQuery?: number,
   @Query('searchField') searchField?: 'ticketId' | 'creatorId' | 'assigneeId',
   @Query('issueCategoryId', new ParseIntPipe({ optional: true })) issueCategoryId? : number ,
   @Query('issueTypeId', new ParseIntPipe({ optional: true })) issueTypeId?: number ,
   @Query('priorityId', new ParseIntPipe({ optional: true })) priorityId?: number ,
   @Query('statusId',  new ParseIntPipe({ optional: true })) statusId?: number ,
   @Query('date', new ParseDatePipe({optional: true})) date? : Date
   
  ){
    
     if (searchField && !searchQuery) {
     throw new BadRequestException('You must enter a search query when a search field is selected.');
  }
     const effectiveSearchField = searchQuery ? (searchField || 'ticketId') : undefined;

    return this.ticketCreationService.getAllTicketDetails(
      page,
      limit,
      { priorityId, issueTypeId, statusId, issueCategoryId, date },
      tab,
      searchQuery,
      effectiveSearchField);
  }



}
