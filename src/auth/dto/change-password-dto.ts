import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsString()
    @IsNotEmpty()
    currentPassword: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    newPassword: string;
}
