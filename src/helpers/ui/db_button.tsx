
import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCurrentCharacter, updateEditStatus, updateEditType } from "../../state/actions/character.actions";
import { Button } from '@material-ui/core';
import { Character } from '../../models/app';

export interface DispatchProps {
    dispatch: Dispatch
}

export interface OwnProps {
    type: string,
    content: string,
    character: Character | null,
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
    const { type, content, character} = ownProps;
    return {
        ...mapDispatchToProps,
        ...ownProps,
        openDialog: (): void => {
            console.log(type)
            if(type === 'edit') {
                dispatch(updateEditStatus('edit'))
                dispatch(updateEditType(content));
                dispatch(setCurrentCharacter(character))
            }
        }
    }
}

const DBButton = (props: DBButtonProps) => {
    const { type, openDialog } = props;
    console.log(type)
    return (
        <Button onClick={() => openDialog()} variant='contained' color={type === 'edit' ? 'primary' : 'secondary'} disableElevation>
            {type === 'edit' ? 'Edit' : 'Delete'}
        </Button>
    )
}

export default connect(null, mapDispatchToProps, mergeProps)(DBButton)