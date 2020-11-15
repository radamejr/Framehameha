import { Button, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { Character } from '../../../../../models/app';
import { NormalState } from '../../../../../models/app/helper_models/content.models';
import './normal.scss'

export interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    normalContent: (normal: NormalState, currentCharacter: number | undefined, action: string | undefined, contentTarget?: string | undefined) => void;
    loading: boolean;
    editStatus: string | undefined;
    currentCharacter: Character | undefined,
    contentTarget?: string | undefined,
}

export type NormalDialogProps = OwnProps;

const NormalDialog = (props: NormalDialogProps) => {
    const { onChange, normalContent, loading, currentCharacter, editStatus, contentTarget } = props;
    const normalCount = currentCharacter ? currentCharacter.normals?.length ? currentCharacter.normals?.length : 0 : 0
    const [fieldsUpdated, updateFieldsUpdated] = useState(false);
    const [input, inputUpdate] = useState('');
    const [startup, startupUpdate] = useState('');
    const [active, activeUpdate] = useState('');
    const [recovery, recoveryUpdate] = useState('');
    const [advantage, advantageUpdate] = useState('');
    const [picture, pictureUpdate] = useState('');
    const [immuneTo, immuneToUpdate] = useState('');
    const [guard, guardUpdate] = useState('');
    const [properties, propertiesUpdate] = useState('');
    const [notes, notesUpdate] = useState('');
    const [type, typeUpdate] = useState('');
    const [list, listUpdate] = useState(`${normalCount + 1}`);
    const [confirmDelete, confirmDeleteUpdate] = useState(false)

    if(contentTarget && currentCharacter && editStatus === 'edit' && !fieldsUpdated) {
        const target = currentCharacter.normals.find(x => x.id === contentTarget);
        if(target){
            inputUpdate(target.input)
            startupUpdate(target.startup)
            activeUpdate(target.active)
            recoveryUpdate(target.recovery)
            advantageUpdate(target.advantage)
            immuneToUpdate(target.immune_to)
            guardUpdate(target.gaurd)
            propertiesUpdate(target.properties)
            notesUpdate(target.special_notes)
            typeUpdate(target.move_type)
            listUpdate(target.list_order)
        }
        updateFieldsUpdated(true);
    }
    
    const normalState: NormalState = {
        input: input,
        startup: startup,
        active: active,
        recovery: recovery,
        advantage: advantage,
        picture: picture,
        immune_to: immuneTo,
        gaurd: guard,
        properties: properties,
        special_notes: notes,
        move_type: type,
        list_order: parseInt(list),
    };   
    if(editStatus !== 'delete') {
        return (
            <div className='normal-contents'>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Input:
                        </div>
                        <div>
                            <input
                                id="input"
                                name="name"
                                value={input}
                                placeholder='Input'
                                className="input"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'input', inputUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Startup:
                        </div>
                        <div>
                            <input
                                id="startup"
                                name="startup"
                                value={startup}
                                placeholder='Startup'
                                className="startup"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'startup', startupUpdate);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Active:
                        </div>
                        <div>
                            <input
                                id="active"
                                name="active"
                                value={active}
                                placeholder='Active'
                                className="active"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'active', activeUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            recovery:
                        </div>
                        <div>
                            <input
                                id="recovery"
                                name="recovery"
                                value={recovery}
                                placeholder='recovery'
                                className="recovery"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'recovery', recoveryUpdate);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Advantage:
                        </div>
                        <div>
                            <input
                                id="advantage"
                                name="advantage"
                                value={advantage}
                                placeholder='advantage'
                                className="advantage"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'advantage', advantageUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Immunity:
                        </div>
                        <div>
                            <input
                                id="immuneTo"
                                name="immuneTo"
                                value={immuneTo}
                                placeholder='immune?'
                                className="immuneTo"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'immuneTo', immuneToUpdate);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Guard:
                        </div>
                        <div>
                            <input
                                id="guard"
                                name="guard"
                                value={guard}
                                placeholder='block how?'
                                className="guard"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'guard', guardUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Properties:
                        </div>
                        <div>
                            <input
                                id="properties"
                                name="properties"
                                value={properties}
                                placeholder='So this is a story'
                                className="properties"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'properties', propertiesUpdate);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Type:
                        </div>
                        <div>
                            <input
                                id="type"
                                name="type"
                                value={type}
                                placeholder='block how?'
                                className="type"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'type', typeUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            List Order:
                        </div>
                        <div>
                            <input
                                id="list"
                                name="list"
                                value={list}
                                placeholder='where in the list'
                                className="list"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'list', listUpdate);
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
                        <Button variant="outlined" color="primary" disabled={loading} disableElevation className='submit' onClick={() => normalContent(normalState, currentCharacter?.id, editStatus)} >
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
                    <h3>Deleting a normal cannot be undone!</h3>
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
                            onClick={() => normalContent(normalState, currentCharacter?.id, editStatus)} >
                            {loading ? <CircularProgress /> : "Delete"}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default NormalDialog