import { Module } from '@nestjs/common';
import { TicketCreationController } from './ticket-creation.controller';
import { TicketCreationService } from './ticket-creation.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TicketCreationController],
  providers: [TicketCreationService, PrismaService]
})
export class TicketCreationModule {}
