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