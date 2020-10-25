import './overlay.scss'

import CreateDialog from './create_account_dialog/create_dialog';
import { Dispatch } from 'redux';
import LoginDialog from './login_dialog/login_dialog';
import React from 'react';
import { User } from '../../models/app/user.model';
import ContentDialog from './content_dialog/content_dialog';
import { CharacterState, NormalState, SpecialState, SpecialVariantState } from '../../models/app/helper_models/content.models';
import { Character } from '../../models/app';

export interface StateProps {
    user: User | null;
    loggingIn: boolean | undefined;
    loginStatus: string | undefined;
    editStatus: string | undefined;
    editType: string | undefined;
    currentCharacter: Character | undefined;
    target: string | undefined
    loading: boolean;
    contentTarget: string | undefined;
    contentTargetParent: string | undefined;
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
    characterContent: (character: CharacterState, action: string | undefined, id?: number) => void
    normalContent: (normal: NormalState, currentCharacter: number | undefined, action: string | undefined, contentTarget?: string | undefined) => void
    specialContent: (special: SpecialState, currentCharacter: number | undefined, action: string | undefined) => void;
    specialVariantContent: (special_variant: SpecialVariantState, currentCharacter: number | undefined, action: string | undefined) => void;
}

export type OverlayDialogProps = StateProps & DispatchProps & MergeProps;

const OverlayDialog = (props: OverlayDialogProps) => {
    const { 
        loggingIn, 
        loginStatus, 
        editStatus, 
        editType, 
        currentCharacter, 
        loading, 
        contentTarget,
        contentTargetParent,
        closeDialog, 
        toggleLogin, 
        handleChange, 
        loginUser, 
        createUser, 
        characterContent, 
        normalContent, 
        specialContent,
        specialVariantContent,
    } = props;

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
                <ContentDialog 
                    onChange={handleChange} 
                    editStatus={editStatus} 
                    currentCharacter={currentCharacter} 
                    editType={editType} loading={loading} 
                    characterContent={characterContent}
                    normalContent={normalContent}
                    specialContent={specialContent}
                    specialVariantContent={specialVariantContent}
                    contentTarget={contentTarget}
                    contentParent={contentTargetParent}
                    />
            </div>
            )
    } else {
        return null;
    }
}

export default OverlayDialog;