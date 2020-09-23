import { Character } from "../../models/app/character.model";
import { State } from "../reducers";

export const selectCharacters = (state: State | null): Character[] | null => state?.characterData?.characters || null;