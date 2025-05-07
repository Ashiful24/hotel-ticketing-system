import { IsNotEmpty, IsNumber } from "class-validator";

export class TickettReassignmentDto{

    @IsNumber()
    @IsNotEmpty()
    ticketId : number;

    @IsNumber()
    @IsNotEmpty()
    assignTo : number;
}