import { Character } from "../app/character.model";

export interface CharacterDataReducerModel {
    characters: Character[] | null,
    currentCharacter: Character | undefined,
    loading: boolean | null,
    editStatus: string | undefined,
    editType: string | undefined,
    target: string | undefined,
}

export const defaultCharacterDataModel: CharacterDataReducerModel = {
    characters: null,
    currentCharacter: undefined,
    loading: false,
    editStatus: '',
    editType: '',
    target: ''
}