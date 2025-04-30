import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';

@Injectable()
export class DepartmentService {

    constructor (private prismaService: PrismaService){}

    async addNewDepartment(createDepartmentDTO: CreateDepartmentDto){
        return await this.prismaService.department.create({
            data: createDepartmentDTO,
        })
    }

    async getDepartmentList(){
        return await this.prismaService.department.findMany();
    }

    async updateDepartment(id : number, updateDepartmentDto: UpdateDepartmentDto){
        return await this.prismaService.department.update({
            where: {id: id},
            data: updateDepartmentDto
        })
    }

    async deleteDepartment(id : number){
        return await this.prismaService.department.delete({
            where: {id: id},
        })
    }

}
