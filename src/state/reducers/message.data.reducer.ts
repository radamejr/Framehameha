import { defaultMessageDataReducerModel, MessageDataReducerModel } from "../../models/reducer/messageData.reducer.model";
import { ActionPromise, Actions } from "../actions/actions";

export default (state: MessageDataReducerModel = defaultMessageDataReducerModel, action: any): MessageDataReducerModel => {
    switch(action.type) {
        case ActionPromise(Actions.GET_CHARACTERS).rejected:
        case ActionPromise(Actions.TOKEN_AUTH).rejected:
        case ActionPromise(Actions.LOGIN_USER).rejected:
            return {
                ...state,
                message: action.payload.error[0],
                messageType: 'error',
            }

        default:
            return state
    }
}