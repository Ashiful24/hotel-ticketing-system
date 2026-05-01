import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDepartmentDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    supervisorId?: number;


}
