import { Actions } from "./actions"

export const clearMessage = () => {
    return {
        type: Actions.CLEAR_MESSAGE,
        payload: null,
    }
}