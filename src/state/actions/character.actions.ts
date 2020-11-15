import { getCharactersAPI } from "../../helpers/api/fetch/app_methods";
import { createAssistAPI, createCharacterAPI, createNormalAPI, createSpecialAPI, createSpecialVariantAPI, createSuperAPI, createSuperVariantAPI, deleteAssistAPI, deleteCharacterAPI, deleteNormalAPI, deleteSpecialAPI, deleteSpecialVariantAPI, deleteSuperAPI, deleteSuperVariantAPI, updateAssistAPI, updateCharacterAPI, updateNormalAPI, updateSpecialAPI, updateSpecialVariantAPI, updateSuperAPI, updateSuperVariantAPI } from "../../helpers/api/fetch/character_methods";
import { Character } from "../../models/app/character.model";
import { AssistState, CharacterState, NormalState, SpecialState, SpecialVariantState, SuperState, SuperVariantState } from "../../models/app/helper_models/content.models";
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

export const updateNormal = (normal: NormalState, id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_NORMAL,
        payload: updateNormalAPI(normal, id, currentTarget)
    }
}

export const deleteNormal = (id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_NORMAL,
        payload: deleteNormalAPI(id, currentTarget)
    }
}

export const createSpecial = (special: SpecialState, id: number): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL,
        payload: createSpecialAPI(special, id)
    }
}

export const updateSpecial = (special: SpecialState, id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL,
        payload: updateSpecialAPI(special, id, currentTarget)
    }
}

export const deleteSpecial = (id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL,
        payload: deleteSpecialAPI(id, currentTarget)
    }
}

export const createSpecialVariant = (special_variant: SpecialVariantState, id: number, parentId: number): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL_VARIANT,
        payload: createSpecialVariantAPI(special_variant, id, parentId)
    }
}

export const updateSpecialVariant = (special_variant: SpecialVariantState, id: number, currentTarget: number | string, parentId: number, ): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL_VARIANT,
        payload: updateSpecialVariantAPI(special_variant, id, parentId, currentTarget)
    }
}

export const deleteSpecialVariant = (id: number, currentTarget: number | string, parentId: number,): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL_VARIANT,
        payload: deleteSpecialVariantAPI(id, parentId, currentTarget)
    }
}

export const createSuperMove = (superMove: SuperState, id: number): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL,
        payload: createSuperAPI(superMove, id)
    }
}

export const updateSuperMove = (superMove: SuperState, id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL,
        payload: updateSuperAPI(superMove, id, currentTarget)
    }
}

export const deleteSuperMove = (id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SPECIAL,
        payload: deleteSuperAPI(id, currentTarget)
    }
}

export const createSuperMoveVariant = (super_variant: SuperVariantState, id: number, parentId: number): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SUPER_VARIANT,
        payload: createSuperVariantAPI(super_variant, id, parentId)
    }
}

export const updateSuperMoveVariant = (super_variant: SuperVariantState, id: number, currentTarget: number | string, parentId: number, ): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SUPER_VARIANT,
        payload: updateSuperVariantAPI(super_variant, id, parentId, currentTarget)
    }
}

export const deleteSuperMoveVariant = (id: number, currentTarget: number | string, parentId: number,): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_SUPER_VARIANT,
        payload: deleteSuperVariantAPI(id, parentId, currentTarget)
    }
}

export const createAssist = (assist: AssistState, id: number): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_ASSIST,
        payload: createAssistAPI(assist, id)
    }
}

export const updateAssist = (assist: AssistState, id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_ASSIST,
        payload: updateAssistAPI(assist, id, currentTarget)
    }
}

export const deleteAssist = (id: number, currentTarget: number | string): Action<Promise<void>> => {
    return {
        type: Actions.CREATE_ASSIST,
        payload: deleteAssistAPI(id, currentTarget)
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

export const setContentTarget = (id: string) => {
    return {
        type: Actions.UPDATE_CONTENT_TARGET,
        payload: id
    }
}

export const setContentTargetParent = (id: string) => {
    return {
        type: Actions.UPDATE_CONTENT_TARGET_PARENT,
        payload: id
    }
}