import { Controller, Get } from '@nestjs/common';
import { UserEntity } from './models/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Get()
    async all(): Promise<UserEntity[]> {
        return this.userService.all();
    }
}
