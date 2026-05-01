import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserType } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) { }

    async createUser(createUserDto: CreateUserDto) {
        //cheack duplicate user....
        const exsitingUser = await this.getUserByEmail(createUserDto.email);

        if (exsitingUser) {
            throw new BadRequestException('Try to creating user with existing email', {
                cause: new Error(),
                description: 'Duplicate Email not allow',
            });
        }

        //encryted password using bcryptjs
        const hash = await bcrypt.hash(createUserDto.password, 10)
        createUserDto.password = hash;



        // save data into database
        const user = await this.prismaService.user.create({
            data: createUserDto,
        })

        return plainToInstance(UserResponseDto, user, {
            excludeExtraneousValues: true,
        });
    }


    public async allUser() {
        const users = await this.prismaService.user.findMany();
        return plainToInstance(UserResponseDto, users, {
            excludeExtraneousValues: true,
        });
    }

    public async getUsersByType(userType: UserType) {
        const users = await this.prismaService.user.findMany({
            where: { userType },
        });

        return plainToInstance(UserResponseDto, users, {
            excludeExtraneousValues: true,
        });
    }

    public async getUserByEmail(email: string) {
        const user = await this.prismaService.user.findUnique({
            where: { email: email }
        });

        return plainToInstance(UserResponseDto, user, {
            excludeExtraneousValues: true,
        });

    }


    public async getAUser(id: number) {
        const user = await this.prismaService.user.findUnique({
            where: { id: id },

        })

        //cheack if the user exist or not
        if (!user) throw new NotFoundException('User not found');

        return user;
    }


    public async updateUserinfo(updateUserDto: UpdateUserDto, id: number) {

        //cheack if the user exist or not
        const user = await this.getAUser(id);
        if (!user) throw new NotFoundException('User Not Found');


        //update user data
        const updatedUser = await this.prismaService.user.update({
            where: { id: id },
            data: updateUserDto
        })
        return plainToInstance(UserResponseDto, updatedUser, {
            excludeExtraneousValues: true,
        });
    }

    async deleteUser(id: number) {

        //cheack if the user exist or not
        const user = await this.getAUser(id);
        if (!user) throw new NotFoundException('User Not Found');

        return await this.prismaService.user.delete({
            where: { id: id }
        })
    }

}
