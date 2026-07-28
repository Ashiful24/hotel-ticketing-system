import { IsNotEmpty, IsNumber } from "class-validator";

export class UnAssignUserRoleDto{

    @IsNumber()
    @IsNotEmpty()
    staffId : number;

    @IsNumber()
    @IsNotEmpty()
    roleId: number;

}
