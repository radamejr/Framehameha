import { Character } from "../../models/character.model";

export const addCharacter = (character: Character) => {
    return {
        type: 'ADD_CHARACTER',
        character
    };
}