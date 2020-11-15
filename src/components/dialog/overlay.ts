

import { Dispatch } from 'redux';
import React from 'react';
import { State } from '../../state/reducers';
import { connect } from 'react-redux';
import { createUser, loginUser, setLoginStatus } from '../../state/actions/user.actions';
import { CreateUserState, LoginUserState } from '../../models/app/helper_models/user.models';
import { setMessage } from '../../helpers/api/fetch/app_methods';
import { createAssist, createCharacter, createNormal, createSpecial, createSpecialVariant, createSuperMove, createSuperMoveVariant, deleteAssist, deleteCharacter, deleteNormal, deleteSpecial, deleteSpecialVariant, deleteSuperMove, deleteSuperMoveVariant, updateAssist, updateCharacter, updateEditStatus, updateEditType, updateNormal, updateSpecial, updateSpecialVariant, updateSuperMove, updateSuperMoveVariant } from '../../state/actions/character.actions';
import OverlayDialog, { DispatchProps, StateProps } from './overlay.container';
import { selectContentTarget, selectContentTargetParent, selectCurrentCharacter, selectEditStatus, selectEditTarget, selectEditType, selectLoading, selectLoggingIn, selectLoginStatus, selectUser } from '../../state/selectors';
import { AssistState, CharacterState, NormalState, SpecialState, SpecialVariantState, SuperState, SuperVariantState } from '../../models/app/helper_models/content.models';

export const mapStateToProps = (state: State): StateProps => {
    const user = selectUser(state);
    const loggingIn = selectLoggingIn(state);
    const loginStatus = selectLoginStatus(state);
    const currentCharacter = selectCurrentCharacter(state);
    const loading = selectLoading(state);
    const editStatus = selectEditStatus(state);
    const editType = selectEditType(state);
    const target = selectEditTarget(state);
    const contentTarget = selectContentTarget(state);
    const contentTargetParent = selectContentTargetParent(state);

    return { user, loggingIn, loginStatus, editStatus, currentCharacter, editType, target, loading, contentTarget, contentTargetParent }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return { 
        dispatch,
        close: (type: string): void  => {
            if(type === 'auth'){
                dispatch(setLoginStatus(''))
            }
            if(type === 'content'){
                dispatch(updateEditStatus(''));
                dispatch(updateEditType(''));
            }
        }
    }
}

export const mergeProps = (mapStateToProps: StateProps, mapDispatchToProps: DispatchProps) => {
    const { close, dispatch } = mapDispatchToProps;
    const { contentTarget, contentTargetParent } = mapStateToProps;
    return {
        ...mapStateToProps,
        ...mapDispatchToProps,
        closeDialog: (event: React.MouseEvent): void => {
            const id = event.target as HTMLElement;
            if(id.className.includes('user-dialog-container')){
                event.preventDefault();
                close('auth');
                
            }
            if(id.className.includes('content-dialog-container')){
                event.preventDefault();
                close('content');
            }
        },
        toggleLogin: (status: string) => {
            dispatch(setLoginStatus(status))
        },
        handleChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>): void => {
            if(event.target.id === id) {
                if(id === 'icon' || id === 'picture') {
                    const files = event?.target?.files || [];
                    const targetFile = files[0];
                    const reader = new FileReader();
                    if(targetFile && targetFile.type.match('image.*')){
                        reader.readAsDataURL(files[0]);
                        reader.onload = () => {
                            reader.result ? update(reader.result as string) : update('null')
                        }
                    } else {
                        update('')
                    }
                } else {
                    update(event.target.value)
                }
            }
        },
        loginUser: (email: string, password: string): void => {
            const userState: LoginUserState = {
                email: email,
                password: password,
            }
            dispatch(loginUser(userState));
        },
        createUser: (email: string, username: string, password: string, confirmPassword: string): void => {
            const userState: CreateUserState = {
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            }
            const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            emailReg.test(email)
            if(emailReg.test(email) && email !== '' && username !== '' && password !== '' && confirmPassword !== '') {
                dispatch(createUser(userState));
            } else {
                dispatch(setMessage('Please fill all required fields.', 'error'))
            }
        },
        characterContent: (character: CharacterState, action: string | undefined, id?: number):void => {
            if(action === 'add'){
                dispatch(createCharacter(character))
            } else if (action === 'edit'){
                const characterUpdate: CharacterState = {
                    name: character.name,
                    dlc: character.dlc,
                    discord_link: character.discord_link,
                    combo_doc_link: character.combo_doc_link,
                    twitter_tag: character.twitter_tag,
                    about: character.about, 
                }; 
                
                if(character.icon) {
                    characterUpdate.icon = character.icon
                }

                if(character.character_picture) {
                    characterUpdate.character_picture = character.character_picture
                }

                dispatch(updateCharacter(characterUpdate, id))
            }else if (action === 'delete') {
                if(id){
                    dispatch(deleteCharacter(id))
                }
            }
        },
        normalContent: (normal: NormalState, currentCharacter: number | undefined, action: string | undefined): void => {
            if(action === 'add'){
                dispatch(createNormal(normal, currentCharacter || 0))
            } else if (action === 'edit'){
                const normalUpdate: NormalState = {
                    input: normal.input,
                    startup: normal.startup,
                    active: normal.active,
                    recovery: normal.recovery,
                    advantage: normal.advantage,
                    immune_to: normal.immune_to,
                    gaurd: normal.gaurd,
                    properties: normal.properties,
                    special_notes: normal.special_notes,
                    move_type: normal.move_type,
                    list_order: normal.list_order,
                }

                if(normal.picture) {
                    normalUpdate.picture = normal.picture
                }

                if(currentCharacter && contentTarget){
                    dispatch(updateNormal(normalUpdate, currentCharacter, contentTarget))
                }
                
            } else if (action === 'delete'){
                if(currentCharacter && contentTarget){
                    dispatch(deleteNormal(currentCharacter, contentTarget))
                }
            }
        },
        specialContent: (special: SpecialState, currentCharacter: number | undefined, action: string | undefined): void => {
            if(action === 'add'){
                dispatch(createSpecial(special, currentCharacter || 0))
            } else if (action === 'edit'){
                const specialUpdate: SpecialState = {
                    name: special.name,
                    input: special.input,
                    special_notes: special.special_notes,
                }

                if(special.picture) {
                    specialUpdate.picture = special.picture
                }
                
                if(currentCharacter && contentTarget){
                    dispatch(updateSpecial(specialUpdate, currentCharacter, contentTarget))
                }
                
            } else if (action === 'delete'){
                if(currentCharacter && contentTarget){
                    dispatch(deleteSpecial(currentCharacter, contentTarget))
                }
            }
        },
        specialVariantContent: (special_variant: SpecialVariantState, currentCharacter: number | undefined, action: string | undefined): void => {
            if(action === 'add' && contentTargetParent){
                dispatch(createSpecialVariant(special_variant, currentCharacter || 0, parseInt(contentTargetParent)))
            } else if (action === 'edit'){
                const specialVariantUpdate: SpecialVariantState = {
                    input_type: special_variant.input_type,
                    startup: special_variant.startup,
                    active: special_variant.active,
                    recovery: special_variant.recovery,
                    advantage: special_variant.advantage,
                    immune_to: special_variant.immune_to,
                    gaurd: special_variant.gaurd,
                    properties: special_variant.properties,
                    special_notes: special_variant.special_notes,
                    meter_used: special_variant.meter_used,
                }

                if(special_variant.picture) {
                    specialVariantUpdate.picture = special_variant.picture
                }
                
                if(currentCharacter && contentTarget && contentTargetParent){
                    dispatch(updateSpecialVariant(specialVariantUpdate, currentCharacter, contentTarget, parseInt(contentTargetParent)))
                }
                
            } else if (action === 'delete'){
                if(currentCharacter && contentTarget && contentTargetParent){
                    dispatch(deleteSpecialVariant(currentCharacter, contentTarget, parseInt(contentTargetParent)))
                }
            }
        },
        superContent: (superMove: SuperState, currentCharacter: number | undefined, action: string | undefined): void => {
            if(action === 'add'){
                dispatch(createSuperMove(superMove, currentCharacter || 0))
            } else if (action === 'edit'){
                const superUpdate: SuperState = {
                    name: superMove.name,
                    input: superMove.input,
                    startup: superMove.startup,
                    active: superMove.active,
                    recovery: superMove.recovery,
                    advantage: superMove.advantage,
                    immune_to: superMove.immune_to,
                    gaurd: superMove.gaurd,
                    properties: superMove.properties,
                    special_notes: superMove.special_notes,
                    meter_used: superMove.meter_used,
                    raw_damage: superMove.raw_damage,
                    scaled_damage: superMove.scaled_damage
                }

                if(superMove.picture) {
                    superUpdate.picture = superMove.picture;
                }
                
                if(currentCharacter && contentTarget){
                    dispatch(updateSuperMove(superUpdate, currentCharacter, contentTarget))
                }
                
            } else if (action === 'delete'){
                if(currentCharacter && contentTarget){
                    dispatch(deleteSuperMove(currentCharacter, contentTarget))
                }
            }
        },
        superVariantContent: (super_variant: SuperVariantState, currentCharacter: number | undefined, action: string | undefined): void => {
            if(action === 'add' && contentTargetParent){
                dispatch(createSuperMoveVariant(super_variant, currentCharacter || 0, parseInt(contentTargetParent)))
            } else if (action === 'edit'){
                const superVariantUpdate: SuperVariantState = {
                    input_type: super_variant.input_type,
                    startup: super_variant.startup,
                    active: super_variant.active,
                    recovery: super_variant.recovery,
                    advantage: super_variant.advantage,
                    immune_to: super_variant.immune_to,
                    gaurd: super_variant.gaurd,
                    properties: super_variant.properties,
                    special_notes: super_variant.special_notes,
                    meter_used: super_variant.meter_used,
                }

                if(super_variant.picture) {
                    superVariantUpdate.picture = super_variant.picture
                }
                
                if(currentCharacter && contentTarget && contentTargetParent){
                    dispatch(updateSuperMoveVariant(superVariantUpdate, currentCharacter, contentTarget, parseInt(contentTargetParent)))
                }
                
            } else if (action === 'delete'){
                if(currentCharacter && contentTarget && contentTargetParent){
                    dispatch(deleteSuperMoveVariant(currentCharacter, contentTarget, parseInt(contentTargetParent)))
                }
            }
        },
        assistContent: (assist: AssistState, currentCharacter: number | undefined, action: string | undefined): void => {
            if(action === 'add'){
                dispatch(createAssist(assist, currentCharacter || 0))
            } else if (action === 'edit'){
                const assistUpdate: AssistState = {
                    startup: assist.startup,
                    active: assist.active,
                    blockstun: assist.blockstun,
                    onscreen: assist.onscreen,
                    hitstop: assist.hitstop,
                    hit_stun: assist.hit_stun,
                    special_notes: assist.special_notes,
                }

                if(assist.picture) {
                    assistUpdate.picture = assist.picture;
                }

                if(currentCharacter && contentTarget){
                    dispatch(updateAssist(assistUpdate, currentCharacter, contentTarget))
                }
                
            } else if (action === 'delete'){
                if(currentCharacter && contentTarget){
                    dispatch(deleteAssist(currentCharacter, contentTarget))
                }
            }
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(OverlayDialog)