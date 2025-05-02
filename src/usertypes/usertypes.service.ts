import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AssignUserTypeDto } from './dto/assign-usertype-dto';
import { UnAssignUserTypeDto } from './dto/unassign-usertype-dto';

@Injectable()
export class UsertypesService {

    constructor(private prismaService: PrismaService) { }

    async userTypesList() {
        return await this.prismaService.userTypes.findMany();
    }

    async assignUserType(assignDto: AssignUserTypeDto) {
        
        // cheack user exist or not 
        const user = await this.prismaService.user.findUnique({ where: { id: assignDto.userId } });
        if (!user) throw new NotFoundException('User not found');

        // cheack user type exsit or not
        const userType = await this.prismaService.userTypes.findUnique({ where: { id: assignDto.usertypeId } })
        if (!userType) throw new NotFoundException('user type not found');

        //cheack duplication
        const exists = await this.prismaService.user_userType.findFirst({
            where: {
                userId: assignDto.userId,
                usertypeId: assignDto.usertypeId,
            },
        });
        if (exists) throw new ConflictException('This user already has this role');

        //save data into data base
        return await this.prismaService.user_userType.create({
            data: assignDto
        })
    }

    async unassignUserType(unassignDto: UnAssignUserTypeDto){

        //chaek assignment exist 
        const exist = await this.prismaService.user_userType.findFirst({
            where:{
                userId: unassignDto.userId,
                usertypeId: unassignDto.usertypeId
            }
        })
        if (!exist) throw new NotFoundException("Assignment not found");

        // delete the assign ment
        return await this.prismaService.user_userType.delete({
            where: {id: exist.id}
        })

    }

}
