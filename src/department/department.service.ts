import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';


@Injectable()
export class DepartmentService {

    constructor(private prismaService: PrismaService) { }

    async addNewDepartment(createDepartmentDTO: CreateDepartmentDto) {

        // Cheak duplicate Department
        const department = await this.prismaService.department.findUnique({ where: { name: createDepartmentDTO.name } })
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
}
