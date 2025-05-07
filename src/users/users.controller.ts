import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    //create a user 
    @Post('/create')
    async creatUser(@Body() creatUserDto: CreateUserDto) {

        return await this.userService.createUser(creatUserDto);
    }

    //get all users details
    
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("Admin",)
    @Get('/all')
    async alluserDetails() {

        return await this.userService.allUser();
    }

    //get staff user 
    @Get('/staff')
    async staffUSerDetails(){
        return await this.userService.staffUser();
    }

    //get manager user 
    @Get('/manager')
    async managerUSerDetails(){
        return await this.userService.managerUser();
    }

    //get admin user 
    @Get('/admin')
    async adminUSerDetails(){
        return await this.userService.adminUser();
    }

    //get admin user 
    @Get('/guest')
    async guestUSerDetails(){
        return await this.userService.guestUser();
    }


    // get a  single user
    @Get(':id')
    async findAuser(@Param('id', ParseIntPipe) id: number) {

        return await this.userService.getAUser(id);
    }

    // update an user info by id
    @Put('/update/:id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto) {
        return await this.userService.updateUserinfo(updateUserDto, id);
    }


    // delete an user by id
    @Delete('/delete/:id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.deleteUser(id);
    }

}
