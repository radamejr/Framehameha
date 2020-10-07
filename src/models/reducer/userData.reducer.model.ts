import { User } from "../app/user.model";

export interface UserDataReducerModel {
    user: User | null,
    loggingIn: boolean,
    loginStatus: string | undefined,
    error: string | null,
}

export const defaultUserDataModel: UserDataReducerModel = {
    user: null,
    loggingIn: false,
    loginStatus: undefined,
    error: null
}