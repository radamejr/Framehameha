import { defaultMessageDataReducerModel, MessageDataReducerModel } from "../../models/reducer/messageData.reducer.model";
import { ActionPromise, Actions } from "../actions/actions";

export default (state: MessageDataReducerModel = defaultMessageDataReducerModel, action: any): MessageDataReducerModel => {
    switch(action.type) {
        case ActionPromise(Actions.GET_CHARACTERS).rejected:
        case ActionPromise(Actions.TOKEN_AUTH).rejected:
        case ActionPromise(Actions.LOGIN_USER).rejected:
        case ActionPromise(Actions.CREATE_USER).rejected:
        case ActionPromise(Actions.CREATE_CHARACTER).rejected:
        case ActionPromise(Actions.CREATE_NORMAL).rejected:
        case ActionPromise(Actions.UPDATE_NORMAL).rejected:
        case ActionPromise(Actions.DELETE_NORMAL).rejected:
        case ActionPromise(Actions.CREATE_SPECIAL).rejected:
        case ActionPromise(Actions.UPDATE_SPECIAL).rejected:
        case ActionPromise(Actions.DELETE_SPECIAL).rejected:
        case ActionPromise(Actions.CREATE_SPECIAL_VARIANT).rejected:
        case ActionPromise(Actions.UPDATE_SPECIAL_VARIANT).rejected:
        case ActionPromise(Actions.DELETE_SPECIAL_VARIANT).rejected:
        case ActionPromise(Actions.CREATE_SUPER).rejected:
        case ActionPromise(Actions.UPDATE_SUPER).rejected:
        case ActionPromise(Actions.DELETE_SUPER).rejected:
        case ActionPromise(Actions.CREATE_SUPER_VARIANT).rejected:
        case ActionPromise(Actions.UPDATE_SUPER_VARIANT).rejected:
        case ActionPromise(Actions.DELETE_SUPER_VARIANT).rejected:
        case ActionPromise(Actions.CREATE_ASSIST).rejected:
        case ActionPromise(Actions.UPDATE_ASSIST).rejected:
        case ActionPromise(Actions.DELETE_ASSIST).rejected:  
            return {
                ...state,
                message: action.payload?.error[0] || 'Unknown error occured',
                messageType: 'error',
            }
        case ActionPromise(Actions.CREATE_CHARACTER).fulfilled:
        case ActionPromise(Actions.UPDATE_CHARACTER).fulfilled:
        case ActionPromise(Actions.DELETE_CHARACTER).fulfilled:
        case ActionPromise(Actions.CREATE_NORMAL).fulfilled:
        case ActionPromise(Actions.UPDATE_NORMAL).fulfilled:
        case ActionPromise(Actions.DELETE_NORMAL).fulfilled:
        case ActionPromise(Actions.CREATE_SPECIAL).pending:
        case ActionPromise(Actions.UPDATE_SPECIAL).pending:
        case ActionPromise(Actions.DELETE_SPECIAL).pending:
        case ActionPromise(Actions.CREATE_SPECIAL_VARIANT).pending:
        case ActionPromise(Actions.UPDATE_SPECIAL_VARIANT).pending:
        case ActionPromise(Actions.DELETE_SPECIAL_VARIANT).pending:
        case ActionPromise(Actions.CREATE_SUPER).pending:
        case ActionPromise(Actions.UPDATE_SUPER).pending:
        case ActionPromise(Actions.DELETE_SUPER).pending:
        case ActionPromise(Actions.CREATE_SUPER_VARIANT).pending:
        case ActionPromise(Actions.UPDATE_SUPER_VARIANT).pending:
        case ActionPromise(Actions.DELETE_SUPER_VARIANT).pending:
        case ActionPromise(Actions.CREATE_ASSIST).pending:
        case ActionPromise(Actions.UPDATE_ASSIST).pending:
        case ActionPromise(Actions.DELETE_ASSIST).pending:  
            return {
                ...state,
                message: 'Success!',
                messageType: 'success',
            }
        case Actions.SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                messageType: action.payload.type,
            }
        case Actions.CLEAR_MESSAGE:
            return {
                ...state,
                message: null,
                messageType: null
            }
        default:
            return state
    }
}