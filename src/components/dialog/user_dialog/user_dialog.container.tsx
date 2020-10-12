import './user_dialog.scss'

import CreateDialog from './create_account_dialog/create_dialog';
import { Dispatch } from 'redux';
import LoginDialog from './login_dialog/login_dialog';
import React from 'react';
import { User } from '../../../models/app/user.model';

export interface StateProps {
    user: User | null;
    loggingIn: boolean | undefined;
    loginStatus: string | undefined;
}

export interface DispatchProps {
    dispatch: Dispatch;
    close: () => void;
}

export interface MergeProps {
    closeDialog: (event: React.MouseEvent) => void
    toggleLogin: (type: string) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    loginUser: (email: string, password: string) => void;
    createUser: (email: string, username: string, password: string, confirmPassword: string) => void;
}

export type UserDialogProps = StateProps & DispatchProps & MergeProps;

const UserDialog = (props: UserDialogProps) => {
    const { loggingIn, loginStatus, closeDialog, toggleLogin, handleChange, loginUser, createUser} = props;

    if(loginStatus === 'login'){
        return (
            <div className="user-dialog-container" {...{ onMouseDown: closeDialog}}>
                <LoginDialog toggleLogin={toggleLogin} onChange={handleChange} loggingIn={loggingIn} loginUser={loginUser}/>
            </div>
        )
    } else if (loginStatus === 'create_user'){
        return(
            <div className="user-dialog-container" {...{ onMouseDown: closeDialog}}>
                <CreateDialog toggleLogin={toggleLogin} onChange={handleChange} loggingIn={loggingIn} createUser={createUser}/>
            </div>
        )
    } else {
        return null;
    }
}

export default UserDialog;