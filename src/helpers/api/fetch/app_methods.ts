import { Character } from "../../../models/app/character.model";
import { Actions } from "../../../state/actions/actions";
import { fetchGet } from "./fetch"

export const getCharactersAPI = (): Promise<Character[]> => {
    return fetchGet('/characters');
}

export const setMessage = (message: string, type: string) => {
    return {
        type: Actions.SET_MESSAGE,
        payload: { message: message, type: type},
    }
}