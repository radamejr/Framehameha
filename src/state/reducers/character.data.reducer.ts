import { CharacterDataReducerModel, defaultCharacterDataModel } from "../../models/reducer/characterData.reducer.model";
import { Actions } from "../actions/actions";

export default (state: CharacterDataReducerModel = defaultCharacterDataModel, action: any): CharacterDataReducerModel => {
    switch(action.type) {       
        case Actions.GET_CHARACTERS_PENDING:
            return {
                ...state,
                characters: state.characters,
                loading: true
            }

        case Actions.GET_CHARACTERS_FULFILLED:
            return {
                ...state,
                characters: action.payload,
                loading: false
            }
        default:
            return state
    }
}

