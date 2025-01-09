import { Injectable } from '@nestjs/common';
import { UserCreateInterface } from 'src/domain/user/create';
import { UserServiceInterface } from 'src/domain/user/service';
import { UserUpdateInterface } from 'src/domain/user/update';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserMapper } from './mappers/user.mapper';

@Injectable()
export class UserService implements UserServiceInterface {
    constructor(
        private readonly prismaService: PrismaService
    ) {}
    async findAll(): Promise<User[]> {
        const result = await this.prismaService.user.findMany({
            where: {
                deletedAt: null
            }
        });
        return result.map(UserMapper.mapModelToEntity);
    }

    async create(data: UserCreateInterface): Promise<User> {
        const result = await this.prismaService.user.create({
            data: {
                name: data.name,
                email: data.email
            }
        });
        return UserMapper.mapModelToEntity(result);
    }
    update(id: string, data: UserUpdateInterface): User {
        throw new Error('Method not implemented.');
    }
    delete(id: string): User {
        throw new Error('Method not implemented.');
    }
    inactive(id: string): User {
        throw new Error('Method not implemented.');
    }
    setFirstPassword(id: string, password: string): User {
        throw new Error('Method not implemented.');
    }
    setNewPassword(id: string, password: string): User {
        throw new Error('Method not implemented.');
    }
}
