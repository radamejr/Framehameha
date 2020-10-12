import { ActionPromise, Actions } from "../actions/actions";
import { UserDataReducerModel, defaultUserDataModel } from "../../models/reducer/userData.reducer.model"

export default (state: UserDataReducerModel = defaultUserDataModel, action: any): UserDataReducerModel => {
    switch(action.type) {
        case ActionPromise(Actions.TOKEN_AUTH).pending:
        case ActionPromise(Actions.LOGIN_USER).pending:
        case ActionPromise(Actions.CREATE_USER).pending:
            return {
                ...state,
                loggingIn: true,
            }
        case ActionPromise(Actions.TOKEN_AUTH).fulfilled:
        case ActionPromise(Actions.LOGIN_USER).fulfilled:
        case ActionPromise(Actions.CREATE_USER).fulfilled:
            return {
                ...state,
                userInfo: {
                    id: action.payload.user.id,
                    username: action.payload.user.username,
                    email: action.payload.user.email,
                    admin: action.payload.user.admin,
                    token: action.payload.jwt
                },
                loggingIn: false,
                loginStatus: 'logged_in'
            }
        case ActionPromise(Actions.TOKEN_AUTH).rejected:
        case ActionPromise(Actions.LOGIN_USER).rejected:
        case ActionPromise(Actions.CREATE_USER).rejected:
            return {
                ...state,
                loggingIn: false,
                loginStatus: ''
            }
        case Actions.LOG_OUT:
            try {
                localStorage.removeItem('state')
                localStorage.removeItem('id')
            } catch (err){
                console.log('error removing items')
            }
            
            return {
                ...state,
                userInfo: null
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
