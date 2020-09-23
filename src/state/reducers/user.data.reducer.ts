import { UserDataReducerModel, defaultUserDataModel } from "../../models/reducer/userData.reducer.model"
import { Actions, ActionPromise } from "../actions/actions";


export default (state: UserDataReducerModel = defaultUserDataModel, action: any): UserDataReducerModel => {
    switch(action.type) {
        case ActionPromise(Actions.GET_USER).pending:
            return {
                ...state,
                user: action.payload,
                loggingIn: true,
            }
        
        case ActionPromise(Actions.GET_USER).fulfilled:
            return {
                ...state,
                error: action.payload,
                loggingIn: false,
            }

        case ActionPromise(Actions.GET_USER).rejected:
            return {
                ...state,
                error: action.payload,
                loggingIn: false,
            }

        default:
            return state
    }
}
