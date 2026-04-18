import { IsNotEmpty, IsNumber } from "class-validator";

export class AssignUserRoleDto{

    @IsNumber()
    @IsNotEmpty()
    staffId : number;

    @IsNumber()
    @IsNotEmpty()
    roleId: number;

}