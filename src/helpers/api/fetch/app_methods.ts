import { Character } from "../../../models/app/character.model";
import { fetchGet } from "./fetch"

export const getCharactersAPI = (): Promise<Character[]> => {
    return fetchGet('/characters');
}

export const setMessage = (message: string, type: string) => {
    return {
        message: message,
        type: type,
    }
}