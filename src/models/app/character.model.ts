import { Normal } from "./normal.model";
import { Special } from "./special.model";
import { Super } from "./super.model";
import { Assist } from "./assist.model";

export interface Character {
    id: number,
    name: string,
    dlc: boolean,
    discord_link: string,
    combo_doc_link: string,
    twitter_tag: string,
    icon: {"url" : string},
    character_picture: {"url" : string},
    about: string,
    normals: Normal[],
    specials: Special[],
    supers: Super[],
    assosts: Assist[],
    created_at: string,
    updated_at: string,
}