import { SpecialVariant } from "./special_variant.model";

export interface Special {
    id: string,
    input: string,
    name: string,
    character_id: string,
    picture: {'url' : string},
    special_notes: string,
    special_variants: SpecialVariant[],
    created_at: string,
    updated_at: string,
}