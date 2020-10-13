import './overlay.scss'

import CreateDialog from './create_account_dialog/create_dialog';
import { Dispatch } from 'redux';
import LoginDialog from './login_dialog/login_dialog';
import React from 'react';
import { User } from '../../models/app/user.model';
import ContentDialog from './content_dialog/content_dialog';

export interface StateProps {
    user: User | null;
    loggingIn: boolean | undefined;
    loginStatus: string | undefined;
    editStatus: string | undefined;
    editType: string | undefined;
    currentCharacter: string | undefined;
    
}

export interface DispatchProps {
    dispatch: Dispatch;
    close: (type: string) => void;
}

export interface MergeProps {
    closeDialog: (event: React.MouseEvent) => void
    toggleLogin: (type: string) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    loginUser: (email: string, password: string) => void;
    createUser: (email: string, username: string, password: string, confirmPassword: string) => void;
}

export type OverlayDialogProps = StateProps & DispatchProps & MergeProps;

const OverlayDialog = (props: OverlayDialogProps) => {
    const { loggingIn, loginStatus, editStatus, editType, currentCharacter, closeDialog, toggleLogin, handleChange, loginUser, createUser} = props;

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
    } else if(editStatus !== '') {
            return (
            <div className="content-dialog-container" {...{ onMouseDown: closeDialog}}>
                <ContentDialog onChange={handleChange} editStatus={editStatus} editType={editType} />
            </div>
            )
    } else {
        return null;
    }
}

export default OverlayDialog;