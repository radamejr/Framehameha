
import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setContentTarget, setContentTargetParent, setCurrentCharacter, setTarget, updateEditStatus, updateEditType } from "../../state/actions/character.actions";
import { Button } from '@material-ui/core';
import { Character } from '../../models/app';

export interface DispatchProps {
    dispatch: Dispatch
}

export interface OwnProps {
    type: string,
    content: string,
    character: Character | null,
    id?: number,
    contentId?: string,
    contentParent?: string
}

export interface MergeProps {
    openDialog: () => void;
}

export type DBButtonProps = DispatchProps & OwnProps & MergeProps;

const mapDispatchToProps = (dispatch: Dispatch):DispatchProps => {
    return {
        dispatch,
    }
}

const mergeProps = (mapStateToProps: null, mapDispatchToProps: DispatchProps, ownProps: OwnProps) => {
    const { dispatch } = mapDispatchToProps;
    const { type, content, character, id, contentId, contentParent} = ownProps;

    return {
        ...mapDispatchToProps,
        ...ownProps,
        openDialog: (): void => {
            if(type === 'edit') {
                dispatch(updateEditStatus('edit'))
            } else if (type === 'delete'){
                dispatch(updateEditStatus('delete'))
            } else {
                dispatch(updateEditStatus('add'))
            }
            dispatch(updateEditType(content));
                dispatch(setCurrentCharacter(character));
            if(id){
                dispatch(setTarget(id))
            }
            if(contentId){
                dispatch(setContentTarget(contentId));
            }
            if(contentParent){
                dispatch(setContentTargetParent(contentParent))
            }
        }
    }
}

const DBButton = (props: DBButtonProps) => {
    const { type, openDialog } = props
    return (
        <Button onClick={() => openDialog()} className={type === 'edit' ? 'edit' : type === 'delete' ? 'delete' : 'add'} variant='contained' color={type === 'delete' ? 'secondary' : 'primary'} disableElevation>
            {type === 'edit' ? 'Edit' : type === 'delete' ? 'Delete' : 'Add'}
        </Button>
    )
}

export default connect(null, mapDispatchToProps, mergeProps)(DBButton)