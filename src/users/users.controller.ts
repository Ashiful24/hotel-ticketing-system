import { Roles } from '@/auth/roles.decorator';
import { RolesGuard } from '@/auth/roles.guard';
import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserType } from '@prisma/client';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersService } from './users.service';

@UseGuards(AuthGuard, RolesGuard)
@Roles(UserType.ADMIN)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post('/create')
    async creatUser(@Body() creatUserDto: CreateUserDto) {
        return await this.userService.createUser(creatUserDto);
    }

    @Get('/all')
    async alluserDetails() {
        return await this.userService.allUser();
    }

    @Get('/by-type')
    async getUsersByType(
        @Query('userType', new ParseEnumPipe(UserType)) userType: UserType,
    ) {
        return await this.userService.getUsersByType(userType);
    }

    @Get(':id')
    async findAuser(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.getAUser(id);
    }

    @Put('/update/:id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto) {
        return await this.userService.updateUserinfo(updateUserDto, id);
    }

    @Delete('/delete/:id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.deleteUser(id);
    }

}
