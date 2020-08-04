import { Character } from "../app/character.model";

export interface CharacterDataReducerModel {
    characters: Character[] | null,
    currentCharacter: string | null,
    error: string | null,
    loading: boolean | null,
}

export const defaultCharacterDataModel: CharacterDataReducerModel = {
    characters: null,
    currentCharacter: null,
    error: null,
    loading: false
}