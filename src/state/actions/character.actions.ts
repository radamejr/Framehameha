import { getCharactersAPI } from "../../helpers/api/fetch/app_methods";
import { Character } from "../../models/app/character.model";
import { Action, Actions } from "./actions";


export const loadCharacters = (): Action<Promise<Character[]>> => {
    return {
        type: Actions.GET_CHARACTERS,
        payload: getCharactersAPI()
    }
}
