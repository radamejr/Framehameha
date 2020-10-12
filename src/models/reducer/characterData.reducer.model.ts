import { Character } from "../app/character.model";

export interface CharacterDataReducerModel {
    characters: Character[] | null,
    currentCharacter: string | null,
    loading: boolean | null,
}

export const defaultCharacterDataModel: CharacterDataReducerModel = {
    characters: null,
    currentCharacter: null,
    loading: false
}