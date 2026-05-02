import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { DepartmentService } from '@/department/department.service';
import { safePrismaOperation } from '@/utils/prisma-utils';
import { CreateRoleDto } from './dto/create-role-dto';
import { UpdateRoleDto } from './dto/update-role-dto';
import { AssignUserRoleDto } from './dto/assign-role-dto';
import { UnAssignUserRoleDto } from './dto/unassign-role-dto';

@Injectable()
export class UserrolesService {

    constructor(
        private prismaService: PrismaService,
        private departmentService: DepartmentService
    ){}

    async addRole(createRoleDTO: CreateRoleDto){
        await this.checkDuplicateCode(createRoleDTO.code);
        await this.checkDepartmentExists(createRoleDTO.departmentId);
        return await this.insertRole(createRoleDTO);
    }

    private async checkDuplicateCode(code: string) {
        const existingRole = await this.getRoleByCode(code);
        if (existingRole) {
            throw new BadRequestException('Role code already exists');
        }
    }

    private async checkDepartmentExists(departmentId: number) {
        const department = await this.departmentService.getDepartmentById(departmentId);
        if (!department) {
            throw new NotFoundException('Department not found');
        }
    }

    private async insertRole(data: CreateRoleDto) {
        return await safePrismaOperation(() =>
            this.prismaService.role.create({ data })
        );
    }

    async updateRole(id: number, updateRoleDTO: UpdateRoleDto){

        // Check the role exists or not
        const role = await this.getRoleById(id);
        if (!role) throw new NotFoundException("Role Not Found");

        // Update with data
        return await safePrismaOperation(() =>
            this.prismaService.role.update({
                where: {id: id},
                data: updateRoleDTO
            })
        )
    }

    async deleteRole(id: number) {
        // Check the role exists or not
        const role = await this.getRoleById(id);
        if (!role) throw new NotFoundException("Role Not Found");

        // Delete the row
        return await this.prismaService.role.delete({
            where: { id: id }
        })
    }

    async getRolesList(){
        return await this.prismaService.role.findMany();
    }

    async getRoleById(id: number) {
        return await this.prismaService.role.findUnique({
            where: { id }
        });
    }

    async getRoleByCode(code: string) {
        return await this.prismaService.role.findUnique({
            where: { code }
        });
    }

    async getRolesByDepartmentId(departmentId: number) {
        return await this.prismaService.role.findMany({
            where: { departmentId }
        });
    }

    async assignRole(assignDto: AssignUserRoleDto){
        await this.checkUserExists(assignDto.staffId);
        await this.checkRoleExists(assignDto.roleId);
        await this.checkDuplicateAssignment(assignDto.staffId, assignDto.roleId);
        return await this.createAssignment(assignDto);
    }

    private async checkUserExists(staffId: number) {
        const user = await this.prismaService.user.findUnique({where: {id: staffId}});
        if (!user) throw new NotFoundException("User not found");
        if (user.userType !== 'STAFF') throw new BadRequestException("Only staff users can be assigned roles");
    }

    private async checkRoleExists(roleId: number) {
        const role = await this.getRoleById(roleId);
        if (!role) throw new NotFoundException("Role not found");
    }

    private async checkDuplicateAssignment(staffId: number, roleId: number) {
        const existUser = await this.prismaService.staffRole.findFirst({
            where: {
                staffId: staffId,
                roleId: roleId
            }
        });
        if(existUser) throw new ConflictException('This user already has this role');
    }

    private async createAssignment(assignDto: AssignUserRoleDto) {
        return await safePrismaOperation(() =>
            this.prismaService.staffRole.create({
                data: {
                    staffId: assignDto.staffId,
                    roleId: assignDto.roleId
                }
            })
        );
    }

    async unassignRole(unassignDto: UnAssignUserRoleDto) {
        const assignment = await this.checkAssignmentExists(unassignDto.staffId, unassignDto.roleId);
        return await this.deleteAssignment(assignment.id);
    }

    private async checkAssignmentExists(staffId: number, roleId: number) {
        const exist = await this.prismaService.staffRole.findFirst({
            where: {
                staffId: staffId,
                roleId: roleId
            }
        });

        if (!exist) throw new NotFoundException("Assignment not found");
        return exist;
    }

    private async deleteAssignment(assignmentId: number) {
        return await safePrismaOperation(() =>
            this.prismaService.staffRole.delete({
                where: {
                    id: assignmentId
                }
            })
        );
    }

}
