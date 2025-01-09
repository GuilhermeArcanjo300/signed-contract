import { IsNotEmpty } from "class-validator";

export class CreateDto {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    name: string;

    @IsNotEmpty({ message: 'E-mail é obrigatório' })
    email: string;

}