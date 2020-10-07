import { Action, Actions } from "./actions"

import { logoutUserApi } from "../../helpers/api/fetch/user_methods"

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