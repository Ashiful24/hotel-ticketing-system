import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateUserDto{

    @IsString()
    @IsOptional()
    firstName : string

    @IsString()
    @IsOptional()
    lastName  : string

    @IsString()
    @IsOptional()
    address   : string

    @IsString()
    @IsOptional()
    phone     : string
    
}