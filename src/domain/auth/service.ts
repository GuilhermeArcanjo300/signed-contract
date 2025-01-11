export interface AuthServiceInterface {
    signin(email: string, password: string): Promise<string>;
}