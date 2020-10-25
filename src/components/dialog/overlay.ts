

import { Dispatch } from 'redux';
import React from 'react';
import { State } from '../../state/reducers';
import { connect } from 'react-redux';
import { createUser, loginUser, setLoginStatus } from '../../state/actions/user.actions';
import { CreateUserState, LoginUserState } from '../../models/app/helper_models/user.models';
import { setMessage } from '../../helpers/api/fetch/app_methods';
import { createCharacter, createNormal, deleteCharacter, deleteNormal, updateCharacter, updateEditStatus, updateEditType, updateNormal } from '../../state/actions/character.actions';
import OverlayDialog, { DispatchProps, StateProps } from './overlay.container';
import { selectContentTarget, selectCurrentCharacter, selectEditStatus, selectEditTarget, selectEditType, selectLoading, selectLoggingIn, selectLoginStatus, selectUser } from '../../state/selectors';
import { CharacterState, NormalState, SpecialState } from '../../models/app/helper_models/content.models';

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

    return { user, loggingIn, loginStatus, editStatus, currentCharacter, editType, target, loading, contentTarget }
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
    const { contentTarget } = mapStateToProps;
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
                    const files = event?.target?.files
                    const reader = new FileReader();
                    if(files){
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
                //dispatch(createNormal(special, currentCharacter || 0))
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
                    //ispatch(updateNormal(specialUpdate, currentCharacter, contentTarget))
                }
                
            } else if (action === 'delete'){
                if(currentCharacter && contentTarget){
                    //dispatch(deleteNormal(currentCharacter, contentTarget))
                }
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(OverlayDialog)