export type RoleType = 'ADMIN' | 'USER'

export interface AccountDto {
    email: string;
    password: string;
    role: RoleType;
}