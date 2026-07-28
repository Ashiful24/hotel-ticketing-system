import { AuthGuard } from '@/auth/auth.guard';
import { Roles } from '@/auth/roles.decorator';
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
import { Priority, TicketStatus, UserType } from '@prisma/client';
import { AuditInterceptor } from 'src/audit/audit.interceptor';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { UpdateTicketDto } from './dto/update-ticket-dto';
import { AssignTicketDto } from './dto/assign-ticket-dto';
import { ChangeTicketStatusDto } from './dto/change-ticket-status-dto';
import { TicketCreationService } from './ticket-creation.service';
@UseGuards(AuthGuard, RolesGuard)
@Controller('ticket')
export class TicketCreationController {
  constructor(private ticketCreationService: TicketCreationService) {}

  @UseInterceptors(AuditInterceptor)
  @Roles(UserType.FRONTDESK)
  @Post('create')
  async creatTicket(@Req() req, @Body() ticketDto: CreateTicketDto) {
    const userId = req.user.id;
    return await this.ticketCreationService.createTicket(userId, ticketDto);
  }

  @Roles(UserType.FRONTDESK)
  @Put('update/:id')
  async updateInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateTicketDto,
  ) {
    return await this.ticketCreationService.updateTicketsById(id, updateDto);
  }

  @UseInterceptors(AuditInterceptor)
  @Roles(UserType.SUPERVISOR)
  @Put('assign/:id')
  async assignTicket(
    @Req() req,
    @Param('id', ParseIntPipe) id: number,
    @Body() assignDto: AssignTicketDto,
  ) {
    return await this.ticketCreationService.assignTicket(
      req.user.id,
      id,
      assignDto,
    );
  }

  @UseInterceptors(AuditInterceptor)
  @Roles(UserType.STAFF, UserType.SUPERVISOR, UserType.FRONTDESK)
  @Put('status/:id')
  async changeTicketStatus(
    @Req() req,
    @Param('id', ParseIntPipe) id: number,
    @Body() changeStatusDto: ChangeTicketStatusDto,
  ) {
    return await this.ticketCreationService.changeTicketStatus(
      req.user.id,
      id,
      changeStatusDto,
    );
  }

  @Get('details/:id')
  async getTicketDetails(@Param('id', ParseIntPipe) id: number) {
    return this.ticketCreationService.getTicketDetailsById(id);
  }

  @Get('list')
  async getAllTicketDetails(
    @Req() req,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
    @Query('tab') tab?: TicketStatus,
    @Query('searchQuery', new ParseIntPipe({ optional: true }))
    searchQuery?: number,
    @Query('searchField') searchField?: 'ticketId' | 'creatorId' | 'assignTo',

    @Query('priority')
    priority?: Priority,
    @Query('departmentId', new ParseIntPipe({ optional: true }))
    departmentId?: number,
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
      req.user.id,
      page,
      limit,
      { priority, date, departmentId },
      tab,
      searchQuery,
      effectiveSearchField,
    );
  }
}
