import { Priority } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  @IsOptional()
  roomNumber?: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  priority: Priority;

  @IsNumber()
  @IsNotEmpty()
  departmentId: number;
}
