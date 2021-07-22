export class User {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    role: number = 0;
    token?: string;
}
