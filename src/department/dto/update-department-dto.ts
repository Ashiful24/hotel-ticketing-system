import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateDepartmentDto {

    @IsString()
    @IsOptional()
    departmentName: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @IsOptional()
    supervisorId: number;


}