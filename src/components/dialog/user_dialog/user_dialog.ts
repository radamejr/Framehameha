import UserDialog, { DispatchProps, StateProps } from './user_dialog.container';
import { selectLoggingIn, selectLoginStatus, selectUser } from '../../../state/selectors';

import { Dispatch } from 'redux';
import React from 'react';
import { State } from '../../../state/reducers';
import { connect } from 'react-redux';
import { setLoginStatus } from '../../../state/actions/user.actions';

export const mapStateToProps = (state: State): StateProps => {
    const user = selectUser(state);
    const loggingIn = selectLoggingIn(state);
    const loginStatus = selectLoginStatus(state);
    return { user, loggingIn, loginStatus}
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return { 
        dispatch,
        close: (): void  => {
            dispatch(setLoginStatus('undefined'))
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
                close();
            }
        },
        toggleLogin: (status: string) => {
            dispatch(setLoginStatus(status))
        },
        handleChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>): void => {
            if(event.target.id === id) {
                update(event.target.value)
            }
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserDialog)