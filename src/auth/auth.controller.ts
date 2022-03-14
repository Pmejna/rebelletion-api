import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Controller()
export class AuthController {
    constructor(private userService: UserService) {

    }

    @Post('register')
    async register(@Body() body) {
        const hashedPass = await bcrypt.hash(body.user_password, 12);
        return this.userService.create({
            user_id: body.user_id,
            user_username: body.user_username,
            user_first_name: body.user_first_name,
            user_last_name: body.user_last_name,
            user_address_country: body.user_address_country,
            user_address_city: body.user_address_city,
            user_address_postcode: body.user_address_postcode,
            user_address_line1: body.user_address_line1,
            user_address_line2: body.user_address_line2,
            user_email: body.user_email,
            user_password: hashedPass,
        })
    }
}
