import { User } from "../app/user.model";

export interface UserDataReducerModel {
    user: User | null,
    loggedIn: string | null,
}

export const defaultUserDataModel: UserDataReducerModel = {
    user: null,
    loggedIn: null
}