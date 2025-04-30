import { IsNotEmpty, IsNumber } from "class-validator";

export  class AssignUserTypeDto{

    @IsNumber()
    @IsNotEmpty()
    "userId":number;

    @IsNumber()
    @IsNotEmpty()
    "usertypeId" : number;

}