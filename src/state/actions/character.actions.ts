import { getCharactersAPI } from "../../helpers/api/fetch/app_methods";
import { createCharacterAPI, createNormalAPI, deleteCharacterAPI, updateCharacterAPI } from "../../helpers/api/fetch/character_methods";
import { Character } from "../../models/app/character.model";
import { CharacterState, NormalState } from "../../models/app/helper_models/content.models";
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

export const updateCharacter = (character: CharacterState, id: number | undefined): Action<Promise<void>> => {
    return {
        type: Actions.UPDATE_CHARACTER,
        payload: updateCharacterAPI(character, id)
    }
}

export const deleteCharacter = (id: number): Action<Promise<void>> => {
    return {
        type: Actions.DELETE_CHARACTER,
        payload: deleteCharacterAPI(id)
    }
}

export const createNormal = (normal: NormalState, id: number): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_NORMAL,
        payload: createNormalAPI(normal, id)
    }
}


export const setCurrentCharacter = (character: Character | null) => {
    return {
        type: Actions.SET_CURRENT_CHARACTER,
        payload: character
    }
}

export const setTarget = (id: number) => {
    return {
        type: Actions.UPDATE_TARGET,
        payload: id
    }
}

export const setContentTarget = (id: number) => {
    return {
        type: Actions.UPDATE_CONTENT_TARGET,
        payload: id
    }
}