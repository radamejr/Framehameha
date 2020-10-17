import { CharacterState } from "../../../models/app/helper_models/content.models"
import { fetchDelete, fetchPost, fetchPut } from "./fetch"

export const createCharacterAPI = (character: CharacterState): Promise<void> => {
    return fetchPost(`/characters`, character);
}

export const updateCharacterAPI = (character: CharacterState, id: number | undefined): Promise<void> => {
    return fetchPut(`/characters/${id}`, character);
}

export const deleteCharacterAPI = (id: number): Promise<void> => {
    return fetchDelete(`/characters/`, {}, id);
}