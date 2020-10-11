export interface User {
    id: string,
    username: string,
    email: string,
    admin: boolean,
    token?: string,
}
