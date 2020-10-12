import { LoginUserState, CreateUserState } from "../../../models/app/helper_models/user.models";
import { fetchGet, fetchPost } from "./fetch"

export const logoutUserApi = (): Promise<void> => {
    return fetchPost(`/logout`, {});
}

export const loginUserApi = (user: LoginUserState): Promise<void> => {
    return fetchPost(`/login`, {auth: { email: user.email, password: user.password }})
}

export const createUserApi = (user: CreateUserState): Promise<void> => {
    return fetchPost(`/users`, user)
}

export const getUserWithTokenApi = (id: string): Promise<void> => {
    return fetchGet(`/verify_user`, id)
}