import { IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class CreateDepartmentDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @IsOptional()
    supervisorId: number;


}