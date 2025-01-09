import { Injectable } from '@nestjs/common';
import { UserCreateInterface } from 'src/domain/user/create';
import { UserServiceInterface } from 'src/domain/user/service';
import { UserUpdateInterface } from 'src/domain/user/update';
import { User } from './entities/user.entity';

@Injectable()
export class UserService implements UserServiceInterface {
    create(data: UserCreateInterface): User {
        throw new Error('Method not implemented.');
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
