import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
    constructor (private prismaService : PrismaService){}

    async createUser(createUserDto : CreateUserDto){
    //encrytep password using bcryptjs
    const hash = await bcrypt.hash(createUserDto.password, 10)
    createUserDto.password = hash;
    
     //cheack duplicate user....
     const exsitingUser = await this.prismaService.user.findFirst({
        where:{
            email:createUserDto.email
        }
    })
    if (exsitingUser){
    throw new BadRequestException('Try to creating user with existing email', {
    cause: new Error(),
    description: 'Duplicate Email not allow',
    });

    }
    // save data into database
     await this.prismaService.user.create({
        data : createUserDto,
     })
    }
  

    async allUser(){
        return await this.prismaService.user.findMany();
    }

    async getAUser(id: number){
        return await this.prismaService.user.findUnique({
             where: {id : id},
             include: {userTypes: true, userRoles: true, departments:true}
        })
    }




}
