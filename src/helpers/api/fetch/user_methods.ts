import { fetchPost } from "./fetch"

export const logoutUserApi = (token?: string): Promise<void> => {
    return fetchPost(`logout`, true, {key: token});
}

