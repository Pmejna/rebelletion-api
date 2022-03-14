import { UserInterface } from "src/interfaces/iuser";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity implements UserInterface {
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column({unique: true})
    user_username: string;
    @Column({default: ''})
    user_first_name: string;
    @Column({default: ''})
    user_last_name: string;
    @Column({default: ''})
    user_address_country: string;
    @Column({default: ''})
    user_address_city: string;
    @Column({default: ''})
    user_address_postcode: string;
    @Column({default: ''})
    user_address_line1: string;
    @Column({default: ''})
    user_address_line2: string;
    @Column({unique: true})
    user_email: string;
    @Column()
    user_password: string;
}