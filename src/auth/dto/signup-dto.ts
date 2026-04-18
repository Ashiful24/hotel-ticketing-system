import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class SignupDto {

    @IsString()
    @IsOptional()
    firstName: string

    @IsString()
    @IsOptional()
    lastName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsOptional()
    address: string

    @IsString()
    @IsOptional()
    phone: string

    @IsString()
    @IsOptional()
    nid: number

}