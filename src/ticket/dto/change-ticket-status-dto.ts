import { TicketStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class ChangeTicketStatusDto {
  @IsEnum(TicketStatus)
  @IsNotEmpty()
  status: TicketStatus;
}
