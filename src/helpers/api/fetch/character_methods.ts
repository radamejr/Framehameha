import { AssistState, CharacterState, NormalState, SpecialState, SpecialVariantState, SuperState, SuperVariantState } from "../../../models/app/helper_models/content.models"
import { fetchDelete, fetchPost, fetchPut } from "./fetch"

export const createCharacterAPI = (character: CharacterState): Promise<void> => {
    return fetchPost(`/characters`, character);
}

export const updateCharacterAPI = (character: CharacterState, id: number | undefined): Promise<void> => {
    return fetchPut(`/characters/${id}`, character);
}

export const deleteCharacterAPI = (id: number): Promise<void> => {
    return fetchDelete(`/characters/${id}`, {});
}

export const createNormalAPI = (normal: NormalState, id: number): Promise<void> => {
    return fetchPost(`/characters/${id}/normals`, normal);
}

export const updateNormalAPI = (normal: NormalState, id: number, contentTarget: string | number): Promise<void> => {
    return fetchPut(`/characters/${id}/normals/${contentTarget}`, normal);
}

export const deleteNormalAPI = (id: number, contentTarget: string | number): Promise<void> => {
    return fetchDelete(`/characters/${id}/normals/${contentTarget}`, {});
}

export const createSpecialAPI = (special: SpecialState, id: number): Promise<void> => {
    return fetchPost(`/characters/${id}/specials`, special);
}

export const updateSpecialAPI = (special: SpecialState, id: number, contentTarget: string | number): Promise<void> => {
    return fetchPut(`/characters/${id}/specials/${contentTarget}`, special);
}

export const deleteSpecialAPI = (id: number, contentTarget: string | number): Promise<void> => {
    return fetchDelete(`/characters/${id}/specials/${contentTarget}`, {});
}

export const createSpecialVariantAPI = (special_varirant: SpecialVariantState, id: number, parentId: number): Promise<void> => {
    return fetchPost(`/characters/${id}/specials/${parentId}/special_variants/`, special_varirant);
}

export const updateSpecialVariantAPI = (special_varirant: SpecialVariantState, id: number, parentId: number, contentTarget: string | number): Promise<void> => {
    return fetchPut(`/characters/${id}/specials/${parentId}/special_variants/${contentTarget}`, special_varirant);
}

export const deleteSpecialVariantAPI = (id: number, parentId: number, contentTarget: string | number): Promise<void> => {
    return fetchDelete(`/characters/${id}/specials/${parentId}/special_variants/${contentTarget}`, {});
}

export const createSuperAPI = (superMove: SuperState, id: number): Promise<void> => {
    return fetchPost(`/characters/${id}/supers`, superMove);
}

export const updateSuperAPI = (superMove: SuperState, id: number, contentTarget: string | number): Promise<void> => {
    return fetchPut(`/characters/${id}/supers/${contentTarget}`, superMove);
}

export const deleteSuperAPI = (id: number, contentTarget: string | number): Promise<void> => {
    return fetchDelete(`/characters/${id}/supers/${contentTarget}`, {});
}

export const createSuperVariantAPI = (super_varirant: SuperVariantState, id: number, parentId: number): Promise<void> => {
    return fetchPost(`/characters/${id}/supers/${parentId}/super_variants`, super_varirant);
}

export const updateSuperVariantAPI = (super_varirant: SuperVariantState, id: number, parentId: number, contentTarget: string | number): Promise<void> => {
    return fetchPut(`/characters/${id}/supers/${parentId}/super_variants/${contentTarget}`, super_varirant);
}

export const deleteSuperVariantAPI = (id: number, parentId: number, contentTarget: string | number): Promise<void> => {
    return fetchDelete(`/characters/${id}/supers/${parentId}/super_variants/${contentTarget}`, {});
}

export const createAssistAPI = (assist: AssistState, id: number): Promise<void> => {
    return fetchPost(`/characters/${id}/assists`, assist);
}

export const updateAssistAPI = (assist: AssistState, id: number, contentTarget: string | number): Promise<void> => {
    return fetchPut(`/characters/${id}/assists/${contentTarget}`, assist);
}

export const deleteAssistAPI = (id: number, contentTarget: string | number): Promise<void> => {
    return fetchDelete(`/characters/${id}/assists/${contentTarget}`, {});
}