import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateUserDto{

    @IsString()
    @IsOptional()
    firstName : string

    @IsString()
    @IsOptional()
    lastName  : string

    @IsEmail()
    @IsNotEmpty()
    email     : string  
    
    @IsString()
    @IsNotEmpty()
    password  : string

    @IsString()
    @IsOptional()
    address   : string

    @IsString()
    @IsOptional()
    phone     : string
    
}