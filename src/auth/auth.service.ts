import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma.service';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService,
        private jwtService: JwtService
    ) { }



    async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
        // Find the user based on email
        const user = await this.prismaService.user.findUnique({
            where: {
                email: loginDto.email
            }
        })
        if (!user) throw new UnauthorizedException("User not fonud");

        // decrypt password and compare 
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) throw new UnauthorizedException("Password not matched");

        // return  web token
        const accessToken = await this.jwtService.signAsync({
            email: user.email,
            id: user.id
        },
            { expiresIn: '1d' }
        );

        return { accessToken };

    }
}
