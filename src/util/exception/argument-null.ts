import { NotFoundException } from "@nestjs/common";

export class ArgumentNullException {
    static throwIfNull(value: any, message: string) {
        if (!value) {
            throw new NotFoundException(message);
        }
    }
}