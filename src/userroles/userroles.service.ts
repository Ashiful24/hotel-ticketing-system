import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRoleDto } from './dto/create-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';
import { AssignUserRoleDto } from './dto/assign-role-dto';
import { UnAssignUserRoleDto } from './dto/unassign-role-dto';

@Injectable()
export class UserrolesService {

    constructor (private prismaService: PrismaService){}

    async addRole(createRoleDTO: CreateRoleDto){

        // Cheak duplicate Role
        const role = await this.prismaService.userRole.findUnique({where: {userRoleName: createRoleDTO.userRoleName}})
        if(role) throw new BadRequestException('All ready has the role');

        return await this.prismaService.userRole.create({
            data: createRoleDTO,
        })
    }

    async updateRole(id: number, updateRoleDTO: UpdateRoleDto){

        // Cheack the role exist or  not
        const role = await this.prismaService.userRole.findUnique({where : {id: id}});
        if (!role) throw new NotFoundException("Role Not Founed");

        //update with data
        return await this.prismaService.userRole.update({
            where: {id: id},
            data: updateRoleDTO
        })
    }

    async deleteRole(id: number) {
        // Cheack the role exist or  not
        const role = await this.prismaService.userRole.findUnique({ where: { id: id } });
        if (!role) throw new NotFoundException("Role Not Founed");

        // delete the row
        return await this.prismaService.userRole.delete({
            where: { id: id }
        })
    }

    async getRolesList(){
        return await this.prismaService.userRole.findMany();
    }

    async assignRole(assignDto: AssignUserRoleDto){
        // cheak  user exist
        const user = await this.prismaService.user.findUnique({where: {id : assignDto.userId}});
        if (!user) throw new NotFoundException("user not found");

        // cheack user role exist
        const userRole = await this.prismaService.userRole.findUnique({where: {id: assignDto.userRoleId}});
        if (!userRole) throw new NotFoundException("User role not found");
        
        // cheack duplicate assignment
        const existUser = await this.prismaService.user_userRole.findFirst({
            where: {
                userId : assignDto.userId,
                userRoleId: assignDto.userRoleId
            }
        })
        if(existUser) throw new ConflictException('This user already has this role');

        // assign the user role to user
        return await this.prismaService.user_userRole.create({
            data: assignDto
        })        
    }

    async unassignRole(usassignDto: UnAssignUserRoleDto) {
        //Check if the assignment exists
        const exist = await this.prismaService.user_userRole.findFirst({
            where: {
                userId: usassignDto.userId,
                userRoleId: usassignDto.userRoleId
            }
        });

        if (!exist) throw new NotFoundException("Assignment not found ");

        // Delete the user-role assignment
        return await this.prismaService.user_userRole.delete({
            where: {
                id: exist.id
            }
        });

    }

}
