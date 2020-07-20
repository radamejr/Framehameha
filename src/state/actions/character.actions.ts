import { Character } from "../../models/app/character.model";

export const addCharacters = (characters: Character[]) => {
    return {
        type: 'ADD_CHARACTERS',
        characters
    };
}