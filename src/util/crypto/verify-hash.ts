import * as bcrypt from 'bcrypt';

export function verifyHash(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
}