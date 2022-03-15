import { UserInterface } from "src/interfaces/iUser";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity implements UserInterface {
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column({unique: true, nullable: true})
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
    @CreateDateColumn({ type: 'timestamptz' })
    user_created_datetime: Date;
    @UpdateDateColumn({ type: 'timestamptz' })
    user_updated_datetime: Date;
}