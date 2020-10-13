import { Character } from "../app/character.model";

export interface CharacterDataReducerModel {
    characters: Character[] | null,
    currentCharacter: string | undefined,
    loading: boolean | null,
    editStatus: string | undefined,
    editType: string | undefined,
}

export const defaultCharacterDataModel: CharacterDataReducerModel = {
    characters: null,
    currentCharacter: '',
    loading: false,
    editStatus: '',
    editType: ''
}