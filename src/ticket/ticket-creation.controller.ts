import { AuthGuard } from '@/auth/auth.guard';
import { RolesGuard } from '@/auth/roles.guard';
import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseDatePipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuditInterceptor } from 'src/audit/audit.interceptor';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { UpdateTicketDto } from './dto/update-ticket-dto';
import { TicketCreationService } from './ticket-creation.service';
@UseGuards(AuthGuard, RolesGuard)
@Controller('ticket')
export class TicketCreationController {
  constructor(private ticketCreationService: TicketCreationService) {}

  @UseInterceptors(AuditInterceptor)
  @Post('create')
  async creatTicket(@Req() req, @Body() ticketDto: CreateTicketDto) {
    const userId = req.user.id;
    return await this.ticketCreationService.createTicket(userId, ticketDto);
  }

  @Put('update/:id')
  async updateInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateTicketDto,
  ) {
    return await this.ticketCreationService.updateTicketsById(id, updateDto);
  }

  @Get('details/:id')
  async getTicketDetails(@Param('id', ParseIntPipe) id: number) {
    return this.ticketCreationService.getTicketDetailsById(id);
  }

  @Get('list')
  async getAllTicketDetails(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
    @Query('tab') tab?: 'unassigned' | 'resolved' | 'due',
    @Query('searchQuery', new ParseIntPipe({ optional: true }))
    searchQuery?: number,
    @Query('searchField') searchField?: 'ticketId' | 'creatorId' | 'assigneeId',
    @Query('issueCategoryId', new ParseIntPipe({ optional: true }))
    issueCategoryId?: number,
    @Query('issueTypeId', new ParseIntPipe({ optional: true }))
    issueTypeId?: number,
    @Query('priorityId', new ParseIntPipe({ optional: true }))
    priorityId?: number,
    @Query('statusId', new ParseIntPipe({ optional: true })) statusId?: number,
    @Query('date', new ParseDatePipe({ optional: true })) date?: Date,
  ) {
    if (searchField && !searchQuery) {
      throw new BadRequestException(
        'You must enter a search query when a search field is selected.',
      );
    }
    const effectiveSearchField = searchQuery
      ? searchField || 'ticketId'
      : undefined;

    return this.ticketCreationService.getAllTicketDetails(
      page,
      limit,
      { priorityId, issueTypeId, statusId, issueCategoryId, date },
      tab,
      searchQuery,
      effectiveSearchField,
    );
  }
}
