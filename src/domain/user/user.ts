export interface UserInterface {
    id: string;
    name: string;
    email: string;
    password: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}