export interface LoginUserState {
    email: string | null;
    password: string | null;
}

export interface CreateUserState {
    username: string | null;
    email: string | null;
    password: string | null;
    confirmPassword: string | null;
}