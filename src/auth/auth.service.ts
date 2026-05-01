import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '@/prisma.service';
import { ChangePasswordDto } from './dto/change-password-dto';
import { LoginDto } from './dto/login-dto';
import { UserResponseDto } from 'src/users/dto/user-response.dto';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService,
        private jwtService: JwtService,
    ) { }

    public async login(loginDto: LoginDto): Promise<{ accessToken: string; user: UserResponseDto }> {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: loginDto.email
            }
        });

        if (!user) throw new UnauthorizedException('User not found');

        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) throw new UnauthorizedException('Password not matched');

        const accessToken = await this.jwtService.signAsync({
            email: user.email,
            id: user.id
        },
            { expiresIn: '1d' }
        );

        const userResponse = plainToInstance(UserResponseDto, user, {
            excludeExtraneousValues: true,
        });

        return { accessToken, user: userResponse };
    }

    public async changePassword(changePasswordDto: ChangePasswordDto) {
        const { userId, currentPassword, newPassword } = changePasswordDto;

        const user = await this.prismaService.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Current password does not match');
        }

        const hash = await bcrypt.hash(newPassword, 10);
        await this.prismaService.user.update({
            where: { id: userId },
            data: { password: hash }
        });

        return { message: 'Password changed successfully' };
    }
}
