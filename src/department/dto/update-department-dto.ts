import { IsNotEmpty, IsString } from "class-validator";

export class UpdateDepartmentDto{

    @IsString()
    @IsNotEmpty()
    departmentName: string;


}