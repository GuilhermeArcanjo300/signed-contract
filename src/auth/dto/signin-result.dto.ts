export class SigninResultDto {
    constructor(token: string) {
        this.token = token;
    }

    token: string;
}