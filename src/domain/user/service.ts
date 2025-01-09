import { UserCreateInterface } from "./create";
import { UserUpdateInterface } from "./update";
import { UserInterface } from "./user";

export interface UserServiceInterface {
    create(data: UserCreateInterface): Promise<UserInterface>;
    update(id: string, data: UserUpdateInterface): UserInterface;
    delete(id: string): UserInterface;
    inactive(id: string): UserInterface;
    setFirstPassword(id: string, password: string): UserInterface;
    setNewPassword(id: string, password: string): UserInterface;
    findAll(): Promise<UserInterface[]>;
}