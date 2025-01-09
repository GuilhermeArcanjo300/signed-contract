import { User as UserModel } from "@prisma/client";
import { User } from "../entities/user.entity";

export class UserMapper {
    static mapModelToEntity(model: UserModel): User {
        const user = new User();
        user.id = model.id;
        user.name = model.name;
        user.email = model.email;
        user.password = model.password;
        user.active = model.active;
        user.createdAt = model.createdAt;
        user.updatedAt = model.updatedAt;
        user.deletedAt = model.deletedAt;
        return user;
    }
}