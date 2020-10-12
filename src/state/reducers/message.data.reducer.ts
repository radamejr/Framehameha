import { defaultMessageDataReducerModel, MessageDataReducerModel } from "../../models/reducer/messageData.reducer.model";
import { ActionPromise, Actions } from "../actions/actions";

export default (state: MessageDataReducerModel = defaultMessageDataReducerModel, action: any): MessageDataReducerModel => {
    switch(action.type) {
        case ActionPromise(Actions.GET_CHARACTERS).rejected:
        case ActionPromise(Actions.TOKEN_AUTH).rejected:
        case ActionPromise(Actions.LOGIN_USER).rejected:
        case ActionPromise(Actions.CREATE_USER).rejected:
            return {
                ...state,
                message: action.payload.error[0],
                messageType: 'error',
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