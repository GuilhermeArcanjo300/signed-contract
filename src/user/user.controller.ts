import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { UserService } from './user.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: CreateDto) {
        const { name, email } = data;
        await this.userService.create({
            name,
            email
        });
    }

    @Get('/all')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async findAll() {
        return await this.userService.findAll();
    }

    @Post('/reset-password/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async resetPassword(@Param('id') id: string, @Body() data: ResetPasswordDto) {
        const { password } = data;
        await this.userService.setNewPassword(id, password);
    }
}
