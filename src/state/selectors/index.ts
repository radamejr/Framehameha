import { Character } from "../../models/app/character.model";
import { State } from "../reducers";

export const selectCharacter = (state: State | null, id: {id: string}): Character | null => {
    let character = null;
    state?.characterData?.characters?.map((c) => {
        if(c.id === parseInt(id.id)){
            character = c
        }
    })
    return character
}
export const selectCharacters = (state: State | null): Character[] | null => state?.characterData?.characters || null;