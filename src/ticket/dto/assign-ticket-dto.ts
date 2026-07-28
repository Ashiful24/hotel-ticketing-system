import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class AssignTicketDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  staffId: number;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  deadline?: Date;
}
