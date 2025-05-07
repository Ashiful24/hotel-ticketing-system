import { Module } from '@nestjs/common';
import { TicketAssingmentController } from './ticket-assingment.controller';
import { TicketAssingmentService } from './ticket-assingment.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TicketAssingmentController],
  providers: [TicketAssingmentService, PrismaService]
})
export class TicketAssingmentModule {}
