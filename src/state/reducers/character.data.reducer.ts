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

        case Actions.UPDATE_EDIT_STATUS:
            return {
                ...state,
                editStatus: action.payload,
            }


        case Actions.UPDATE_EDIT_TYPE:
            return {
                ...state,
                editType: action.payload,
            }

        case Actions.UPDATE_TARGET:
            return {
                ...state,
                target: action.payload,
            }
        default:
            return state
    }
}

