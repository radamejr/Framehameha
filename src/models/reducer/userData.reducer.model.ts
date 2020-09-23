import { User } from "../app/user.model";

export interface UserDataReducerModel {
    user: User | null,
    loggingIn: boolean,
    error: string | null,
}

export const defaultUserDataModel: UserDataReducerModel = {
    user: null,
    loggingIn: false,
    error: null
}