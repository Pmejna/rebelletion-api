import { IsEmail, IsNotEmpty } from "class-validator";


export class RegisterDto {
    user_username: string | null;
    @IsNotEmpty()
    @IsEmail()
    user_email: string;
    @IsNotEmpty()
    user_password: string;
    @IsNotEmpty()
    user_password_confirmation: string;
}