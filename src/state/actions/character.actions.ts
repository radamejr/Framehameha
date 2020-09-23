import { Character } from "../../models/app/character.model";
import { Actions } from "./actions";


export const loadCharacters = (characters: Character[]) => {
    return {
        type: Actions.GET_CHARACTERS,
        payload: characters
    }
}
