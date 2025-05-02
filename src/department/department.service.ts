import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';
import { AssignDepartmentDto } from './dto/assign-department-dto';
import { UnAssignDepartmentDto } from './unassign-department-dto';

@Injectable()
export class DepartmentService {

    constructor(private prismaService: PrismaService) { }

    async addNewDepartment(createDepartmentDTO: CreateDepartmentDto) {

        // Cheak duplicate Department
        const department = await this.prismaService.department.findUnique({ where: { departmentName: createDepartmentDTO.departmentName } })
        if (department) throw new BadRequestException('All ready has the Department');


        return await this.prismaService.department.create({
            data: createDepartmentDTO,
        })
    }

    async getDepartmentList() {
        return await this.prismaService.department.findMany();
    }

    async updateDepartment(id: number, updateDepartmentDto: UpdateDepartmentDto) {

        // Cheack the Department exist or  not
        const department = await this.prismaService.department.findUnique({ where: { id: id } });
        if (!department) throw new NotFoundException("Department Not Founed");

        return await this.prismaService.department.update({
            where: { id: id },
            data: updateDepartmentDto
        })
    }

    async deleteDepartment(id: number) {

        // Cheack the Department exist or  not
        const department = await this.prismaService.department.findUnique({ where: { id: id } });
        if (!department) throw new NotFoundException("Department Not Founed");

        return await this.prismaService.department.delete({
            where: { id: id },
        })
    }

    async assignDepartment(assignDto: AssignDepartmentDto){

        // cheack user exist 
        const user = await this.prismaService.user.findUnique({where: {id : assignDto.userId}})
        if (!user) throw new NotFoundException("User not found or created");

        // cheack department exist
        const department = await this.prismaService.department.findUnique({where: {id: assignDto.departmentId}});
        if (!department) throw new NotFoundException("Department not found or created");

        // cheack duplication
        const exist = await this.prismaService.user_department.findFirst({
            where: {
                userId : assignDto.userId,
                departmentId: assignDto.departmentId
            }
        })
        if(exist) throw new ConflictException("This user already has this Department")

        // Assign department to user
        return await this.prismaService.user_department.create({
            data: assignDto
        })
    }

    async unassignDepartment(unassignDto : UnAssignDepartmentDto){
        
        //cheack assignment exist 
        const exist = await this.prismaService.user_department.findFirst({
            where: {
                userId : unassignDto.userId,
                departmentId: unassignDto.departmentId
            }
        })
        if(!exist) throw new NotFoundException("Assignment not found");

        //delete the assignment
        return await this.prismaService.user_department.delete({
            where: {id: exist.id}
        })
    }

}
