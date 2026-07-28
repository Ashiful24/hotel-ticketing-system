import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { ChangePasswordDto } from './dto/change-password-dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    async login(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto);
    }

    @UseGuards(AuthGuard)
    @Post('/change-password')
    async changePassword(@Req() req, @Body() changePasswordDto: ChangePasswordDto) {
        return await this.authService.changePassword(req.user.id, changePasswordDto);
    }

}
