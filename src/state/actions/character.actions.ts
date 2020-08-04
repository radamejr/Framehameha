import { Character } from "../../models/app/character.model";
import { charactersAPI } from "../../helpers/api/urlFor";
import axios from 'axios'
import { Action, ActionCreator, AnyAction } from "redux";

export const loadCharacters = (characters: Character[]) => {
    return {
        type: 'GET_CHARACTERS_SUCCESS',
        payload: characters
    }
}
