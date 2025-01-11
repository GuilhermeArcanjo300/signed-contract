import { IsNotEmpty } from "class-validator";

export class ResetPasswordDto {
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    password: string;
}