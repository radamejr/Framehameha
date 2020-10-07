import { Character } from "../../../models/app/character.model";
import { fetchGet } from "./fetch"

export const getCharactersAPI = (): Promise<Character[]> => {
    return fetchGet('/characters', false);
}