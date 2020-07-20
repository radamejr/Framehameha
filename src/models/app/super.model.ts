import { SuperVariant } from "./super_variant.model";

export interface Super {
    id: string,
    name: string,
    input: string,
    character_id: string,
    startup: string,
    active: string,
    recovery: string,
    advantage: string,
    immune_to: string,
    picture: {"url": string},
    gaurd: string,
    properties: string,
    special_notes: string,
    meter_used: string,
    raw_damage: string,
    scaled_damage: string,
    special_variants: SuperVariant[],
    created_at: string,
    updated_at: string,
}