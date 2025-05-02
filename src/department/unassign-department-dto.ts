import { IsNotEmpty, IsNumber } from "class-validator";

export class UnAssignDepartmentDto{


    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    departmentId: number;

}