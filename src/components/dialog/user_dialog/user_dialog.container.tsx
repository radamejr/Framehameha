import './user_dialog.scss'

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

export interface OwnProps {
    closeDialog?: (event: React.MouseEvent) => void
}

export type UserDialogProps = StateProps & DispatchProps & OwnProps;

const UserDialog = (props: UserDialogProps) => {
    const { user, loggingIn, loginStatus, closeDialog } = props;

    if(loginStatus === 'login'){
        return (
            <div className="user-dialog-container" {...{ onMouseDown: closeDialog}}>
                <LoginDialog />
            </div>
        )
    } else if (loginStatus === 'create_user'){
        return(
            <div className="user-dialog">
                create soon
            </div>
        )
    } else {
        return null;
    }
}

export default UserDialog;