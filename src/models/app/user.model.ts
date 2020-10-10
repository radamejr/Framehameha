export interface User {
    loggedin_in: string,
    status: number,
    user: UserObject | null,
}

export interface UserObject {
    id: number,
    username: string,
    email: string,
    admin: boolean,
}