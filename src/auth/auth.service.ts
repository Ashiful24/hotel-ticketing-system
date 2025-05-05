import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SignupDto } from './dto/signup-dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService,
        private jwtService: JwtService
    ) { }

    async signup(signup: SignupDto) {

        // encrypt tha password
        const hash = await bcrypt.hash(signup.password, 10);
        signup.password = hash;

        //cheak duplicate user
        const exsitingUser = await this.prismaService.user.findUnique({
            where: {
                email: signup.email
            }
        });
        if (exsitingUser) throw new ConflictException("This Email Allready Used by another user");

        //create user and save the date
        const user = await this.prismaService.user.create({
            data: signup,

        })

        //assign user type 
        await this.prismaService.user_userType.create({
            data: {
                userId: user.id,
                usertypeId: 1
            }
        })

        return user;

    }

    async login(loginDto: LoginDto) : Promise<{accessToken : string}>{
        // Find the user based on email
        const  user = await this.prismaService.user.findFirst({
            where : {
                email : loginDto.email
            }
        }) 
        if (!user) throw new UnauthorizedException("User not fonud");
        
        // decrypt password and compare 
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        if(!isMatch) throw new UnauthorizedException("Password not matched");

        // return  web token
        const accessToken = await this.jwtService.signAsync({
            email : user.email,
            id: user.id
        },
      {expiresIn: '1d'} 
    );

    return {accessToken};

    }
}
