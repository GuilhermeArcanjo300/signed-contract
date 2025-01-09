import { IsNotEmpty } from "class-validator";
import { UserCreateInterface } from "src/domain/user/create";

export class CreateDto implements UserCreateInterface {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    name: string;

    @IsNotEmpty({ message: 'E-mail é obrigatório' })
    email: string;

}