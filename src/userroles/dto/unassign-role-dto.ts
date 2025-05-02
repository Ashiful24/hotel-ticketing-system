import { IsNotEmpty, IsNumber } from "class-validator";

export class UnAssignUserRoleDto{

    @IsNumber()
    @IsNotEmpty()
    userId : number;

    @IsNumber()
    @IsNotEmpty()
    userRoleId: number;

}