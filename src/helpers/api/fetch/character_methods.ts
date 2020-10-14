import { CharacterState } from "../../../models/app/helper_models/content.models"
import { fetchPost, fetchPut } from "./fetch"

export const createCharacterAPI = (character: CharacterState): Promise<void> => {
    return fetchPost(`/characters`, character);
}

export const updateCharacterAPI = (character: CharacterState, id: number | undefined): Promise<void> => {
    return fetchPut(`/characters/${id}`, character);
}