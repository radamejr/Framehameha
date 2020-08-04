import { Character } from "../../models/app/character.model";
import { getCharacters } from "../../helpers/api/api_methods";


export const loadCharacters = () => {
    return {
        type: 'GET_CHARACTERS',
        payload: getCharacters() }
}
