import { IsNotEmpty } from "class-validator";

export class SigninDto {
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    email: string;

    @IsNotEmpty({ message: 'A senha é obrigatório' })
    password: string;
}