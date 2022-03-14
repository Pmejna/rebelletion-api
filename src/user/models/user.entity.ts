import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column({unique: true})
    user_username: string;
    @Column()
    user_first_name: string;
    @Column()
    user_last_name: string;
    @Column()
    user_address_country: string;
    @Column()
    user_address_city: string;
    @Column()
    user_address_postcode: string;
    @Column()
    user_address_line1: string;
    @Column()
    user_address_line2: string;
    @Column({unique: true})
    user_email: string;
    @Column()
    user_password: string;
}