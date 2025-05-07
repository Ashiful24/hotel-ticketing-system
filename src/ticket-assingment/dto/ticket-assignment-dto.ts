import { IsNotEmpty, IsNumber } from "class-validator";

export class TickettAssignmentDto{

    @IsNumber()
    @IsNotEmpty()
    ticketId : number;

    @IsNumber()
    @IsNotEmpty()
    assignTo : number;
}