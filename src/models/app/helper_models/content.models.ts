export interface CharacterState {
    name: string,
    dlc: boolean,
    discord_link: string,
    combo_doc_link: string,
    icon?: string,
    character_picture?: string,
    twitter_tag: string,
    about: string,
}

export interface NormalState {
    input: string,
    startup: string,
    active: string,
    recovery: string,
    advantage: string,
    immune_to: string,
    picture?: string,
    gaurd: string,
    properties: string,
    special_notes: string,
    move_type: string,
    list_order: number,
}

export interface SpecialState {
    name: string,
    input: string,
    picture?: string,
    special_notes: string,
}

export interface SpecialVariantState {
    input_type: string,
    startup: string,
    active: string,
    recovery: string,
    advantage: string,
    immune_to: string,
    meter_used: number | string,
    picture?: string,
    gaurd: string,
    properties: string,
    special_notes: string,
}

export interface SuperState {
    name: string,
    input: string,
    startup: string,
    active: string,
    recovery: string,
    advantage: string,
    immune_to: string,
    meter_used: number | string,
    picture?: string,
    gaurd: string,
    properties: string,
    special_notes: string,
    raw_damage: number,
    scaled_damage: number,
}

export interface SuperVariantState {
    input_type: string,
    startup: string,
    active: string,
    recovery: string,
    advantage: string,
    immune_to: string,
    meter_used: number | string,
    picture?: string,
    gaurd: string,
    properties: string,
    special_notes: string,
}

export interface AssistState {
    startup: string,
    blockstun: string,
    active: string,
    onscreen: string,
    hitstop: string,
    special_notes: string,
    picture?: string,
    hit_stun: string,
}