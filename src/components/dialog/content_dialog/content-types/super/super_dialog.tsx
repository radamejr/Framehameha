import { Button, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { Character } from '../../../../../models/app';
import { SuperState } from '../../../../../models/app/helper_models/content.models';
import './super.scss'

export interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    superContent: (superMove: SuperState, currentCharacter: number | undefined, action: string | undefined, contentTarget?: string | undefined) => void;
    loading: boolean;
    editStatus: string | undefined;
    currentCharacter: Character | undefined,
    contentTarget?: string | undefined,
}

export type SuperDialogProps = OwnProps;

const SuperDialog = (props: SuperDialogProps) => {
    const { onChange, superContent, loading, currentCharacter, editStatus, contentTarget } = props;
    const [fieldsUpdated, updateFieldsUpdated] = useState(false);
    const [name, nameUpdate] = useState('');
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
    const [meter, meterUpdate] = useState('');
    const [raw, rawUpdate] = useState('');
    const [scaled, scaledUpdate] = useState('')
    const [confirmDelete, confirmDeleteUpdate] = useState(false)

    if(contentTarget && currentCharacter && editStatus === 'edit' && !fieldsUpdated) {
        nameUpdate(currentCharacter.supers[parseInt(contentTarget)- 1].name)
        inputUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].input)
        startupUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].startup)
        activeUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].active)
        recoveryUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].recovery)
        advantageUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].advantage)
        immuneToUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].immune_to)
        guardUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].gaurd)
        propertiesUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].properties)
        notesUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].special_notes)
        meterUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].meter_used)
        rawUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].raw_damage)
        scaledUpdate(currentCharacter.supers[parseInt(contentTarget) - 1].scaled_damage)
        updateFieldsUpdated(true);
    }
    
    const superState: SuperState = {
        name: name,
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
        meter_used: parseInt(meter),
        raw_damage: parseInt(raw),
        scaled_damage: parseInt(scaled)
    };   
    if(editStatus !== 'delete') {
        return (
            <div className='super-contents'>
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
                                placeholder='What is this move?'
                                className="name"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'name', nameUpdate);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Input:
                        </div>
                        <div>
                            <input
                                id="input"
                                name="input"
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
                            Raw Damage:
                        </div>
                        <div>
                            <input
                                id="raw"
                                name="raw"
                                value={raw}
                                placeholder='I am just gonna super'
                                className="raw"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'raw', rawUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Scaled Damage:
                        </div>
                        <div>
                            <input
                                id="scaled"
                                name="scaled"
                                value={scaled}
                                placeholder='ending long combo damage'
                                className="list"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'scaled', scaledUpdate);
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
                        <Button variant="outlined" color="primary" disabled={loading} disableElevation className='submit' onClick={() => superContent(superState, currentCharacter?.id, editStatus)} >
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
                    <h3>Deleting a super cannot be undone!</h3>
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
                            onClick={() => superContent(superState, currentCharacter?.id, editStatus)} >
                            {loading ? <CircularProgress /> : "Delete"}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SuperDialog