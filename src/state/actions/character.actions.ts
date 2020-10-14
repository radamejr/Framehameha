import { getCharactersAPI } from "../../helpers/api/fetch/app_methods";
import { createCharacterAPI } from "../../helpers/api/fetch/character_methods";
import { Character } from "../../models/app/character.model";
import { CharacterState } from "../../models/app/helper_models/content.models";
import { Action, Actions } from "./actions";


export const loadCharacters = (): Action<Promise<Character[]>> => {
    return {
        type: Actions.GET_CHARACTERS,
        payload: getCharactersAPI()
    }
}

export const updateEditStatus = (type: string) => {
    return {
        type: Actions.UPDATE_EDIT_STATUS,
        payload: type
    }
}

export const updateEditType = (type: string) => {
    return {
        type: Actions.UPDATE_EDIT_TYPE,
        payload: type
    }
}

export const createCharacter = (character: CharacterState): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_CHARACTER,
        payload: createCharacterAPI(character)
    }

}