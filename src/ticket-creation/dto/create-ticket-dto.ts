import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTicketDto {

  @IsNumber()
  @IsNotEmpty()
  roomNumber: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  priorityId: number;
  
  @IsNumber()
  @IsNotEmpty()
  issueTypeId: number;
}