import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRoleDto } from './dto/create-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';

@Injectable()
export class UserrolesService {

    constructor (private prismaService: PrismaService){}

    async addRole(createRoleDTO: CreateRoleDto){

        return await this.prismaService.userRole.create({
            data: createRoleDTO,
        })
    }

    async updateRole(id: number, updateRoleDTO: UpdateRoleDto){
        return await this.prismaService.userRole.update({
            where: {id: id},
            data: updateRoleDTO
        })
    }

    async deleteRole(id: number){
        return await this.prismaService.userRole.delete({
            where: {id: id}
        })
    }

    async getRolesList(){
        return await this.prismaService.userRole.findMany();
    }




}
