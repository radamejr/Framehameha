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

        case ActionPromise(Actions.GET_CHARACTERS).fulfilled:
        case ActionPromise(Actions.CREATE_CHARACTER).fulfilled:
        case ActionPromise(Actions.UPDATE_CHARACTER).fulfilled:
        case ActionPromise(Actions.DELETE_CHARACTER).fulfilled:
        case ActionPromise(Actions.CREATE_NORMAL).fulfilled:
        case ActionPromise(Actions.UPDATE_NORMAL).fulfilled:
        case ActionPromise(Actions.DELETE_NORMAL).fulfilled:
        case ActionPromise(Actions.CREATE_SPECIAL).fulfilled:
        case ActionPromise(Actions.UPDATE_SPECIAL).fulfilled:
        case ActionPromise(Actions.DELETE_SPECIAL).fulfilled:
        case ActionPromise(Actions.CREATE_SPECIAL_VARIANT).fulfilled:
        case ActionPromise(Actions.UPDATE_SPECIAL_VARIANT).fulfilled:
        case ActionPromise(Actions.DELETE_SPECIAL_VARIANT).fulfilled:
        case ActionPromise(Actions.CREATE_SUPER).fulfilled:
        case ActionPromise(Actions.UPDATE_SUPER).fulfilled:
        case ActionPromise(Actions.DELETE_SUPER).fulfilled:
        case ActionPromise(Actions.CREATE_SUPER_VARIANT).fulfilled:
        case ActionPromise(Actions.UPDATE_SUPER_VARIANT).fulfilled:
        case ActionPromise(Actions.DELETE_SUPER_VARIANT).fulfilled:
        case ActionPromise(Actions.CREATE_ASSIST).fulfilled:
        case ActionPromise(Actions.UPDATE_ASSIST).fulfilled:
        case ActionPromise(Actions.DELETE_ASSIST).fulfilled:
            return {
                ...state,
                characters: action.payload.characters.sort(sortCharacters),
                loading: false,
                editStatus: ''
            }

        case ActionPromise(Actions.GET_CHARACTERS).pending:
        case ActionPromise(Actions.CREATE_CHARACTER).pending:
        case ActionPromise(Actions.UPDATE_CHARACTER).pending:
        case ActionPromise(Actions.DELETE_CHARACTER).pending:
        case ActionPromise(Actions.CREATE_NORMAL).pending:
        case ActionPromise(Actions.UPDATE_NORMAL).pending:
        case ActionPromise(Actions.DELETE_NORMAL).pending:
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
        case Actions.UPDATE_CONTENT_TARGET:
            return {
                ...state,
                contentTarget: action.payload,
            }
        default:
            return state
    }
}

