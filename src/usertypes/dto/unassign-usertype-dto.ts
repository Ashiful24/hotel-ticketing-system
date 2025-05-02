import { IsNotEmpty, IsNumber } from "class-validator";

export  class UnAssignUserTypeDto{

    @IsNumber()
    @IsNotEmpty()
    "userId":number;

    @IsNumber()
    @IsNotEmpty()
    "usertypeId" : number;

}