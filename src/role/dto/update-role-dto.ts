import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateRoleDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    departmentId?: number;


} 
