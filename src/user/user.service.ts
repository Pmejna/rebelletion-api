import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) {

    }

    async all(): Promise<UserEntity[]> {
        return await  this.userRepository.find();
    }

    async create(data): Promise<UserEntity> {
        return this.userRepository.save(data)
    }
}
