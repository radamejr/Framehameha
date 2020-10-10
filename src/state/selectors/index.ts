import { Character } from "../../models/app/character.model";
import { State } from "../reducers";
import { User } from "../../models/app/user.model";

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

export const selectUser = (state: State | null): User | null => state?.userData?.userInfo || null;

export const selectLoggingIn = (state: State | null): boolean | undefined => state?.userData?.loggingIn;

export const selectLoginStatus = (state: State | null): string | undefined => state?.userData?.loginStatus