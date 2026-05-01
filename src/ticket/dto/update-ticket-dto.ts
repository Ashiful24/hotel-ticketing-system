import { Priority } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateTicketDto {

  @IsNumber()
  @IsNotEmpty()
  roomNumber: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  priority: Priority;


}
