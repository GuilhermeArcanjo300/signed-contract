import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post()
    async create(@Body() data: CreateDto) {
        this.userService.create({
            name: data.name,
            email: data.email
        });
    }

    @Get('/all')
    async findAll() {
        return await this.userService.findAll();
    }
}
