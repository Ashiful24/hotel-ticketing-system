import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Prisma, UserType } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '@/prisma.service';
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

        const exsitingPhone = await this.getUserByPhone(createUserDto.phone);

        if (exsitingPhone) {
            throw new BadRequestException('Try to creating user with existing phone', {
                cause: new Error(),
                description: 'Duplicate Phone not allow',
            });
        }

        //encryted password using bcryptjs
        const hash = await bcrypt.hash(createUserDto.password, 10)
        createUserDto.password = hash;



        // save data into database
        try {
            const user = await this.prismaService.user.create({
                data: createUserDto,
            });

            return plainToInstance(UserResponseDto, user, {
                excludeExtraneousValues: true,
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new BadRequestException('Duplicate field value. Please use another value.');
            }
            throw new InternalServerErrorException('Unable to create user.');
        }
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

    public async getUserByPhone(phone: string) {
        const user = await this.prismaService.user.findUnique({
            where: { phone: phone }
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
        try {
            const updatedUser = await this.prismaService.user.update({
                where: { id: id },
                data: updateUserDto,
            });

            return plainToInstance(UserResponseDto, updatedUser, {
                excludeExtraneousValues: true,
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new BadRequestException('Duplicate field value. Please use another value.');
            }
            throw new InternalServerErrorException('Unable to update user.');
        }
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
