import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SigninResultDto } from './dto/signin-result.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('/signin')
    async signin(@Body() data: SigninDto): Promise<SigninResultDto> {
        const { email, password } = data;
        const token = await this.authService.signin(
            email,
            password
        );
        return new SigninResultDto(token);
    }
}
