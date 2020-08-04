import { CharacterDataReducerModel, defaultCharacterDataModel } from "../../models/reducer/characterData.reducer.model";

export default (state: CharacterDataReducerModel = defaultCharacterDataModel, action: any): CharacterDataReducerModel => {
    switch(action.type) {       
        case 'GET_CHARACTERS':
            return {
                ...state,
                loading: true
            }

        case 'GET_CHARACTERS_SUCCESS':
            return {
                ...state,
                characters: action.payload,
                error: '',
                loading: false
            }
        default:
            return state
    }
}

