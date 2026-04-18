import { BadRequestException, Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseDatePipe, ParseIntPipe, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { TicketCreationService } from './ticket-creation.service';
import { RolesGuard } from '@/auth/roles.guard';
import { Roles } from '@/auth/roles.decorator';
import { UpdateTicketDto } from './dto/update-ticket-dto';
import { AuditInterceptor } from 'src/audit/audit.interceptor';
import { UseInterceptors } from '@nestjs/common';

@Controller('ticket')
export class TicketCreationController {

  constructor(private ticketCreationService: TicketCreationService) { }

  @UseInterceptors(AuditInterceptor)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("Guest")
  @Post('create')
  async creatTicket(@Req() req, @Body() ticketDto: CreateTicketDto) {
    const userId = req.user.id;
    return await this.ticketCreationService.createTicket(userId, ticketDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("Guest")
  @Get('edit/:id')
  async myTicketsinfo(@Param('id', ParseIntPipe) id:number) {
    const result =  await this.ticketCreationService.getTicketsById(id);

    return {
       data : result,
       message :`These are information of ticketID : ${id}`
    };
  }

  @UseInterceptors(AuditInterceptor)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("Guest")
  @Put('edit/:id')
  async updateInfo(@Param('id', ParseIntPipe) id:number , @Body() updateDto: UpdateTicketDto) {
    return await this.ticketCreationService.updateTicketsById(id, updateDto);
  }


  @UseInterceptors(AuditInterceptor)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("Admin")
  @Delete('delete/:id')
  async deleteTicket(@Param('id', ParseIntPipe) id:number ) {
    return await this.ticketCreationService.deleteTicketsById(id);
  }




  
  @UseGuards(AuthGuard)
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
