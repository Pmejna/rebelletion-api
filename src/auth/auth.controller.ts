import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './models/register.dto';

@Controller()
export class AuthController {
    constructor(private userService: UserService) {

    }

    @Post('register')
    async register(@Body() body: RegisterDto) {
        if (body.user_password !== body.user_password_confirmation) {
            throw new BadRequestException('Password does not match');
        }
        const hashedPass = await bcrypt.hash(body.user_password, 12);
        return this.userService.create({
            user_username: body.user_username,
            user_email: body.user_email,
            user_password: hashedPass,
        })
    }
}
