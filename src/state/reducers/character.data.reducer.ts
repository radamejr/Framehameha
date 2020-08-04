import { CharacterDataReducerModel, defaultCharacterDataModel } from "../../models/reducer/characterData.reducer.model";

export default (state: CharacterDataReducerModel = defaultCharacterDataModel, action: any): CharacterDataReducerModel => {
    switch(action.type) {         
        case 'GET_CHARACTERS':
            return {
                ...state,
                characters: action.characters,
                error: ''
            }
        default:
            return state
    }
}

