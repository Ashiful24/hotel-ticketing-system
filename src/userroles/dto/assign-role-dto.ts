import { IsNotEmpty, IsNumber } from "class-validator";

export class AssignUserRoleDto{

    @IsNumber()
    @IsNotEmpty()
    userId : number;

    @IsNumber()
    @IsNotEmpty()
    userRoleId: number;

}