import { Button, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { Character } from '../../../../../models/app';
import { SpecialState } from '../../../../../models/app/helper_models/content.models';
import './special.scss'

export interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    specialContent: (normal: SpecialState, currentCharacter: number | undefined, action: string | undefined, contentTarget?: string | undefined) => void;
    loading: boolean;
    editStatus: string | undefined;
    currentCharacter: Character | undefined,
    contentTarget?: string | undefined,
}

export type SpecialDialogProps = OwnProps;

const NormalDialog = (props: SpecialDialogProps) => {
    const { onChange, specialContent, loading, currentCharacter, editStatus, contentTarget } = props;
    const [fieldsUpdated, updateFieldsUpdated] = useState(false);
    const [name, nameUpdate] = useState('');
    const [input, inputUpdate] = useState('');
    const [picture, pictureUpdate] = useState('');
    const [notes, notesUpdate] = useState('');
    const [confirmDelete, confirmDeleteUpdate] = useState(false)

    if(contentTarget && currentCharacter && editStatus === 'edit' && !fieldsUpdated) {
        nameUpdate(currentCharacter.specials[parseInt(contentTarget) - 1].name)
        inputUpdate(currentCharacter.specials[parseInt(contentTarget) - 1].input)
        notesUpdate(currentCharacter.specials[parseInt(contentTarget) - 1].special_notes)
        updateFieldsUpdated(true);
    }
    
    const SpecialState: SpecialState = {
        name: name,
        input: input,
        picture: picture,
        special_notes: notes,
    };   
    if(editStatus !== 'delete') {
        return (
            <div className='special-contents'>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Name:
                        </div>
                        <div>
                            <input
                                id="name"
                                name="name"
                                value={name}
                                placeholder='name'
                                className="name"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'name', nameUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Input:
                        </div>
                        <div>
                            <input
                                id="input"
                                name="input"
                                value={input}
                                placeholder='input'
                                className="input"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'input', inputUpdate);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Notes:
                        </div>
                        <div>
                            <input
                                id="notes"
                                name="notes"
                                value={notes}
                                placeholder='leave notes here'
                                className="notes"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'notes', notesUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Picture:
                        </div>
                        <div>
                            <input
                                id="picture"
                                name="picture"
                                placeholder='image'
                                className="picture"
                                type="file"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'picture', pictureUpdate);
                                }}
                            />
                        </div>
                    </div> 
                </div>
                <div className="content-row">
                    <div className="submit">
                        <Button variant="outlined" color="primary" disabled={loading} disableElevation className='submit' onClick={() => specialContent(SpecialState, currentCharacter?.id, editStatus)} >
                            {loading ? <CircularProgress /> : "Submit"}
                        </Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="delete">
                <div className='warning'>
                    <h3>Deleting a special cannot be undone!</h3>
                </div>
                <div className="confirm">
                    <input 
                        id="confirmDelete"
                        name="confirmDelete"
                        placeholder='image'
                        className="confirmDelete"
                        type="checkbox"
                        onChange={(() => confirmDeleteUpdate(!confirmDelete))}
                    />
                    <label>I understand.</label>
                </div>
                <div className="content-row">
                    <div className="submit">
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            disabled={loading || !confirmDelete} 
                            disableElevation className='submit' 
                            onClick={() => specialContent(SpecialState, currentCharacter?.id, editStatus)} >
                            {loading ? <CircularProgress /> : "Delete"}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default NormalDialog