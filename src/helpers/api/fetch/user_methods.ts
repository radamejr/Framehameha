import { LoginUserState, CreateUserState } from "../../../models/app/helper_models/user.models";
import { fetchPost } from "./fetch"

export const logoutUserApi = (token?: string): Promise<void> => {
    return fetchPost(`logout`, true, {key: token});
}

export const loginUserApi = (user: LoginUserState, token?: string): Promise<void> => {
    return fetchPost(`login`, true, {user: user, key: token})
}