

import { Dispatch } from 'redux';
import React from 'react';
import { State } from '../../state/reducers';
import { connect } from 'react-redux';
import { createUser, loginUser, setLoginStatus } from '../../state/actions/user.actions';
import { CreateUserState, LoginUserState } from '../../models/app/helper_models/user.models';
import { setMessage } from '../../helpers/api/fetch/app_methods';
import { updateEditStatus, updateEditType } from '../../state/actions/character.actions';
import OverlayDialog, { DispatchProps, StateProps } from './overlay.container';
import { selectCurrentCharacter, selectEditStatus, selectEditType, selectLoggingIn, selectLoginStatus, selectUser } from '../../state/selectors';

export const mapStateToProps = (state: State): StateProps => {
    const user = selectUser(state);
    const loggingIn = selectLoggingIn(state);
    const loginStatus = selectLoginStatus(state);
    const editStatus = selectEditStatus(state);
    const currentCharacter = selectCurrentCharacter(state);
    const editType = selectEditType(state)
    return { user, loggingIn, loginStatus, editStatus, currentCharacter, editType}
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
                update(event.target.value)
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(OverlayDialog)