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

        // Check duplicate Role (now per department)
        const role = await this.prismaService.role.findFirst({
            where: {
                name: createRoleDTO.name,
                departmentId: createRoleDTO.departmentId
            }
        });
        if(role) throw new BadRequestException('Role already exists in this department');

        return await this.prismaService.role.create({
            data: createRoleDTO,
        })
    }

    async updateRole(id: number, updateRoleDTO: UpdateRoleDto){

        // Check the role exists or not
        const role = await this.prismaService.role.findUnique({where : {id: id}});
        if (!role) throw new NotFoundException("Role Not Found");

        // Update with data
        return await this.prismaService.role.update({
            where: {id: id},
            data: updateRoleDTO
        })
    }

    async deleteRole(id: number) {
        // Check the role exists or not
        const role = await this.prismaService.role.findUnique({ where: { id: id } });
        if (!role) throw new NotFoundException("Role Not Found");

        // Delete the row
        return await this.prismaService.role.delete({
            where: { id: id }
        })
    }

    async getRolesList(){
        return await this.prismaService.role.findMany();
    }

    async assignRole(assignDto: AssignUserRoleDto){
        // Check user exists
        const user = await this.prismaService.user.findUnique({where: {id : assignDto.staffId}});
        if (!user) throw new NotFoundException("User not found");

        // Check role exists
        const role = await this.prismaService.role.findUnique({where: {id: assignDto.roleId}});
        if (!role) throw new NotFoundException("Role not found");
        
        // Check duplicate assignment
        const existUser = await this.prismaService.staffRole.findFirst({
            where: {
                staffId : assignDto.staffId,
                roleId: assignDto.roleId
            }
        })
        if(existUser) throw new ConflictException('This user already has this role');

        // Assign the role to user
        return await this.prismaService.staffRole.create({
            data: {
                staffId: assignDto.staffId,
                roleId: assignDto.roleId
            }
        })        
    }

    async unassignRole(unassignDto: UnAssignUserRoleDto) {
        // Check if the assignment exists
        const exist = await this.prismaService.staffRole.findFirst({
            where: {
                staffId: unassignDto.staffId,
                roleId: unassignDto.roleId
            }
        });

        if (!exist) throw new NotFoundException("Assignment not found");

        // Delete the user-role assignment
        return await this.prismaService.staffRole.delete({
            where: {
                id: exist.id
            }
        });

    }

}
