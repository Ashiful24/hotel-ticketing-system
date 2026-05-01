import { UserType } from "@prisma/client"
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {

    @IsString()
    @IsOptional()
    firstName?: string

    @IsString()
    @IsOptional()
    lastName?: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsOptional()
    phone: string

    @IsString()
    @IsNotEmpty()
    nid: string

    @IsString()
    @IsOptional()
    address?: string

    @IsString()
    @IsOptional()
    profileImg?: string

    @IsEnum(UserType)
    @IsNotEmpty()
    userType: UserType;

}
