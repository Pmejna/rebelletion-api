import { BadRequestException, Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './models/register.dto';

@Controller()
export class AuthController {
    constructor(private userService: UserService) {

    }

    @Post('register')
    async register(@Body() body: RegisterDto) {
        if (body.password !== body.password_confirmation) {
            throw new BadRequestException('Password does not match');
        }
        const hashedPass = await bcrypt.hash(body.password, 12);
        return this.userService.create({
            user_username:  body.username,
            user_email:     body.email,
            user_password:  hashedPass,
        })
    }

    @Post('login')
    async login(@Body() body) {
        const user = await this.userService.findOne({where: {user_email: body.email}});
        if (!user) {
            throw new NotFoundException('The user has been not found');
        }

        if (!await bcrypt.compare(body.password, user.user_password)) {
            throw new BadRequestException('Invalid credentials');
        }
        return user;
    }
}
