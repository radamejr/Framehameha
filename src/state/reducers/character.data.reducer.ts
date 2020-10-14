import { Character } from "../../models/app";
import { CharacterDataReducerModel, defaultCharacterDataModel } from "../../models/reducer/characterData.reducer.model";
import { ActionPromise, Actions } from "../actions/actions";

const sortCharacters = (a: Character, b: Character) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    }else if (nameA < nameB) {
      comparison = -1;
    }

    return comparison;

} 

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
                characters: action.payload.sort(sortCharacters),
                loading: false
            }

        case ActionPromise(Actions.CREATE_CHARACTER).fulfilled:
            return {
                ...state,
                loading: false,
            }

        case ActionPromise(Actions.CREATE_CHARACTER).pending:
            return {
                ...state,
                loading: true,
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
        case Actions.UPDATE_EDIT_STATUS:
            return {
                ...state,
                editStatus: action.payload,
            }
        case Actions.SET_CURRENT_CHARACTER:
            return {
                ...state,
                currentCharacter: action.payload,
            }
        
        default:
            return state
    }
}

