import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) { }

    async createUser(createUserDto: CreateUserDto) {

        //encrytep password using bcryptjs
        const hash = await bcrypt.hash(createUserDto.password, 10)
        createUserDto.password = hash;

        //cheack duplicate user....
        const exsitingUser = await this.prismaService.user.findFirst({
            where: {
                email: createUserDto.email
            }
        })
        if (exsitingUser) {
            throw new BadRequestException('Try to creating user with existing email', {
                cause: new Error(),
                description: 'Duplicate Email not allow',
            });

        }

        // save data into database
        return await this.prismaService.user.create({
            data: createUserDto,
        })
    }


    async allUser() {
        return await this.prismaService.user.findMany();
    }





    async getAUser(id: number) {
        const user = await this.prismaService.user.findUnique({
            where: { id: id },

        })

        //cheack if the user exist or not
        if (!user) throw new NotFoundException('User not found');

        return user;
    }


    async updateUserinfo(updateUserDto: UpdateUserDto, id: number) {

        //cheack if the user exist or not
        const user = await this.prismaService.user.findUnique({ where: { id } });
        if (!user) throw new NotFoundException('User Not Found');

        //update user data
        return await this.prismaService.user.update({
            where: { id: id },
            data: updateUserDto
        })
    }

    async deleteUser(id: number) {

        //cheack if the user exist or not
        const user = await this.prismaService.user.findUnique({ where: { id } });
        if (!user) throw new NotFoundException('User Not Found');

        return await this.prismaService.user.delete({
            where: { id: id }
        })
    }

}
