import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthServiceInterface } from 'src/domain/auth/service';
import { UserService } from 'src/user/user.service';
import { verifyHash } from 'src/util/crypto/verify-hash';

@Injectable()
export class AuthService implements AuthServiceInterface {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) {}

    async signin(email: string, password: string): Promise<string> {
        const user = await this.userService.findByEmail(email);
        const isPasswordValid = verifyHash(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Usuário ou senha inválidos');
        }
        return await this.jwtService.signAsync({
            id: user.id
        }, { expiresIn: '1d' });
    }
}