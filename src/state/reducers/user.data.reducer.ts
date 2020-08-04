import { UserDataReducerModel, defaultUserDataModel } from "../../models/reducer/userData.reducer.model"

export default (state: UserDataReducerModel = defaultUserDataModel, action: any): UserDataReducerModel => {
    switch(action.type) {
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'GET_USER_FAILED':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
