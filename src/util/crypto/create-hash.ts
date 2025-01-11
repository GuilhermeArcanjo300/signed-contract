import * as bcrypt from 'bcrypt';

export function createHash(data: string): string {
    const hash = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data, hash);
}