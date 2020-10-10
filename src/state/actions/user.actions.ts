import { Action, Actions } from "./actions"

import { loginUserApi, logoutUserApi } from "../../helpers/api/fetch/user_methods"
import { LoginUserState, CreateUserState } from "../../models/app/helper_models/user.models"

export const logoutUser = (): Action<Promise<void>> => {
    return {
        type: Actions.LOG_OUT,
        payload: logoutUserApi(),
    }
}

export const setLoginStatus = (status: string) => {
    return {
        type: Actions.LOGIN_STATUS,
        payload: status
    }
}

export const loginUser = (user: LoginUserState): Action<Promise<void>> => {
    return {
        type: Actions.LOGIN_USER,
        payload: loginUserApi(user),
    }
}