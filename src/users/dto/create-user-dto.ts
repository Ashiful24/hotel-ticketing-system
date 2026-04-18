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

    @IsEnum([UserType.ADMIN, UserType.STAFF, UserType.FRONTDESK, UserType.SUPERVISOR])
    @IsNotEmpty()
    userType: UserType

}