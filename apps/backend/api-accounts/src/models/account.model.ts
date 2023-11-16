export type RoleType = 'ADMIN' | 'USER'

export interface AccountDto {
    username: string,
    email: string;
    password: string;
    role: RoleType;
}