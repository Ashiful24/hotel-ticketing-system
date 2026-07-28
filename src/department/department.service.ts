import { PrismaService } from '@/prisma.service';
import { UsersService } from '@/users/users.service';
import { safePrismaOperation } from '@/utils/prisma-utils';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserType } from '@prisma/client';
import { CreateDepartmentDto } from './dto/create-department-dto';
import { UpdateDepartmentDto } from './dto/update-department-dto';

@Injectable()
export class DepartmentService {
  constructor(
    private prismaService: PrismaService,
    private readonly userService: UsersService,
  ) {}

  public getDepartmentById(id: number) {
    return this.prismaService.department.findUnique({ where: { id: id } });
  }

  public getDepartmentByCode(code: string) {
    return this.prismaService.department.findUnique({ where: { code: code } });
  }

  public getDepartmentBySupervisorId(supervisorId: number) {
    return this.prismaService.department.findUnique({
      where: { supervisorId: supervisorId },
    });
  }

  async getDepartmentBySupervisorIdOrThrow(supervisorId: number) {
    const department = await this.getDepartmentBySupervisorId(supervisorId);
    if (!department) {
      throw new NotFoundException('Department not found for this supervisor');
    }
    return department;
  }

  async createDepartment(dto: CreateDepartmentDto) {
    const { code, supervisorId, name, description } = dto;

    // Run checks in parallel
    const [existingDepartment, existingSupervisorDepartment, user] =
      await Promise.all([
        this.getDepartmentByCode(code),
        supervisorId
          ? this.getDepartmentBySupervisorId(supervisorId)
          : Promise.resolve(null),
        supervisorId
          ? this.userService.getAUser(supervisorId)
          : Promise.resolve(null),
      ]);

    // Duplicate code check
    if (existingDepartment) {
      throw new BadRequestException('Department with this code already exists');
    }

    // Supervisor validations
    if (supervisorId) {
      if (!user) {
        throw new BadRequestException('Supervisor not found');
      }

      if (user.userType !== UserType.SUPERVISOR) {
        throw new BadRequestException('User is not a supervisor');
      }

      if (existingSupervisorDepartment) {
        throw new BadRequestException(
          'This supervisor is already assigned to another department',
        );
      }
    }

    return await safePrismaOperation(() =>
      this.prismaService.department.create({
        data: dto,
      }),
    );
  }

  async getDepartmentList() {
    return await this.prismaService.department.findMany();
  }

  async updateDepartment(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    // Check the Department exist or not
    const department = await this.getDepartmentById(id);
    if (!department) throw new NotFoundException('Department Not Found');

    // Supervisor validations if supervisorId is provided
    if (updateDepartmentDto.supervisorId !== undefined) {
      if (updateDepartmentDto.supervisorId !== department.supervisorId) {
        // Only validate if changing supervisor
        const [user, existingSupervisorDepartment] = await Promise.all([
          updateDepartmentDto.supervisorId
            ? this.userService.getAUser(updateDepartmentDto.supervisorId)
            : Promise.resolve(null),
          updateDepartmentDto.supervisorId
            ? this.getDepartmentBySupervisorId(updateDepartmentDto.supervisorId)
            : Promise.resolve(null),
        ]);

        if (updateDepartmentDto.supervisorId) {
          if (!user) {
            throw new BadRequestException('Supervisor not found');
          }

          if (user.userType !== UserType.SUPERVISOR) {
            throw new BadRequestException('User is not a supervisor');
          }

          if (existingSupervisorDepartment) {
            throw new BadRequestException(
              'This supervisor is already assigned to another department',
            );
          }
        }
      }
    }

    return await safePrismaOperation(() =>
      this.prismaService.department.update({
        where: { id: id },
        data: updateDepartmentDto,
      }),
    );
  }

  async deleteDepartment(id: number) {
    // Check the Department exist or not
    const department = await this.getDepartmentById(id);
    if (!department) throw new NotFoundException('Department Not Found');

    return await this.prismaService.department.delete({
      where: { id: id },
    });
  }
}
