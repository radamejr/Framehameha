import { Button, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { Character } from '../../../../../models/app';
import { SuperVariantState } from '../../../../../models/app/helper_models/content.models';
import './super_variant.scss'

export interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    superVariantContent: (super_variant: SuperVariantState, currentCharacter: number | undefined, action: string | undefined) => void;
    loading: boolean;
    editStatus: string | undefined;
    currentCharacter: Character | undefined,
    contentTarget?: string | undefined,
    contentParent?: string | undefined,
}

export type SuperVariantDialogProps = OwnProps;

const SuperVariantDialog = (props: SuperVariantDialogProps) => {
    const { onChange, superVariantContent, loading, currentCharacter, editStatus, contentTarget, contentParent } = props;
    const [fieldsUpdated, updateFieldsUpdated] = useState(false);
    const [inputType, inputTypeUpdate] = useState('');
    const [startup, startupUpdate] = useState('');
    const [active, activeUpdate] = useState('');
    const [recovery, recoveryUpdate] = useState('');
    const [advantage, advantageUpdate] = useState('');
    const [picture, pictureUpdate] = useState('');
    const [immuneTo, immuneToUpdate] = useState('');
    const [guard, guardUpdate] = useState('');
    const [properties, propertiesUpdate] = useState('');
    const [meterUsed, meterUsedUpdate] = useState('');
    const [notes, notesUpdate] = useState('');
    const [confirmDelete, confirmDeleteUpdate] = useState(false)
    
    if(contentTarget && currentCharacter && contentParent && editStatus === 'edit' && !fieldsUpdated) {
        inputTypeUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].input_type)
        startupUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].startup)
        activeUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].active)
        recoveryUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].recovery)
        advantageUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].advantage)
        immuneToUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].immune_to)
        guardUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].gaurd)
        propertiesUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].properties)
        meterUsedUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].meter_used)
        notesUpdate(currentCharacter.supers[parseInt(contentParent) - 1].super_variants[parseInt(contentTarget)].special_notes)
        updateFieldsUpdated(true);
    }
    
    const superVariantState: SuperVariantState = {
        input_type: inputType,
        startup: startup,
        active: active,
        recovery: recovery,
        advantage: advantage,
        picture: picture,
        immune_to: immuneTo,
        gaurd: guard,
        properties: properties,
        special_notes: notes,
        meter_used: parseInt(meterUsed),
    };   
    if(editStatus !== 'delete') {
        return (
            <div className='super-variant-contents'>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Input:
                        </div>
                        <div>
                            <input
                                id="inputType"
                                name="name"
                                value={inputType}
                                placeholder='Input'
                                className="inputType"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'inputType', inputTypeUpdate);
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
                        <Button variant="outlined" color="primary" disabled={loading} disableElevation className='submit' onClick={() => superVariantContent(superVariantState, currentCharacter?.id, editStatus)} >
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
                    <h3>Deleting a super variant cannot be undone!</h3>
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
                            onClick={() => superVariantContent(superVariantState, currentCharacter?.id, editStatus)} >
                            {loading ? <CircularProgress /> : "Delete"}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SuperVariantDialog