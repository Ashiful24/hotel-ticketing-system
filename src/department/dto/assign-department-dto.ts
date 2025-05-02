import { IsNotEmpty, IsNumber } from "class-validator";

export class AssignDepartmentDto{


    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    departmentId: number;

}