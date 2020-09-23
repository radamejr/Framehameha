import { CharacterDataReducerModel, defaultCharacterDataModel } from "../../models/reducer/characterData.reducer.model";
import { Actions, ActionPromise } from "../actions/actions";

export default (state: CharacterDataReducerModel = defaultCharacterDataModel, action: any): CharacterDataReducerModel => {
    switch(action.type) {       
        case ActionPromise(Actions.GET_CHARACTERS).pending:
            return {
                ...state,
                loading: true
            }

        case ActionPromise(Actions.GET_CHARACTERS).fulfilled:
            return {
                ...state,
                characters: action.payload,
                error: '',
                loading: false
            }

        case ActionPromise(Actions.GET_CHARACTERS).rejected:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

