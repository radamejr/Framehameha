import { User } from "../app/user.model";

export interface UserDataReducerModel {
    userInfo: User | null,
    loggingIn: boolean,
    loginStatus: string | undefined,
}

export const defaultUserDataModel: UserDataReducerModel = {
    userInfo: null,
    loggingIn: false,
    loginStatus: undefined,
}