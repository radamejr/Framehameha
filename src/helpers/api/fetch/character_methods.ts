import { CharacterState } from "../../../models/app/helper_models/content.models"
import { fetchPost } from "./fetch"

export const createCharacterAPI = (character: CharacterState): Promise<void> => {
    return fetchPost(`/characters`, character);
}