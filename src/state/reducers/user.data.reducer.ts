import { ActionPromise, Actions } from "../actions/actions";
import { UserDataReducerModel, defaultUserDataModel } from "../../models/reducer/userData.reducer.model"

export default (state: UserDataReducerModel = defaultUserDataModel, action: any): UserDataReducerModel => {
    switch(action.type) {
        case ActionPromise(Actions.GET_USER).pending:
        case ActionPromise(Actions.LOGIN_USER).pending:
            return {
                ...state,
                loggingIn: true,
            }
        
        case ActionPromise(Actions.GET_USER).fulfilled:
        case ActionPromise(Actions.LOGIN_USER).fulfilled:
            return {
                ...state,
                userInfo: action.payload,
                loggingIn: false,
            }

        case ActionPromise(Actions.GET_USER).rejected:
        case ActionPromise(Actions.LOGIN_USER).rejected:
            return {
                ...state,
                error: action.payload,
                userInfo: null,
                loggingIn: false,
            }
        case Actions.LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.payload
            }
        default:
            return state
    }
}
