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

export const selectCurrentCharacter = (state: State | null): Character | undefined => state?.characterData?.currentCharacter;

export const selectLoggingIn = (state: State | null): boolean | undefined => state?.userData?.loggingIn;

export const selectLoginStatus = (state: State | null): string | undefined => state?.userData?.loginStatus

export const selectLoading = (state: State | null): boolean => state?.characterData?.loading || false;

export const selectEditStatus = (state: State | null): string | undefined => state?.characterData?.editStatus;

export const selectEditType= (state: State | null): string | undefined => state?.characterData?.editType;

export const selectEditTarget= (state: State | null): string | undefined => state?.characterData?.target;

export const selectContentTarget= (state: State | null): string | undefined => state?.characterData?.contentTarget;

export const selectMessage = (state: State): string | null | undefined => state.messageData?.message

export const selectMessageType = (state: State): string | null | undefined => state.messageData?.messageType