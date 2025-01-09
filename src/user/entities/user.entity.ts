import { BaseEntity } from "src/common/entities/base-entity";
import { UserInterface } from "src/domain/user/user";

export class User extends BaseEntity implements UserInterface {
    name: string;
    email: string;
    password: string;
    active: boolean;
}