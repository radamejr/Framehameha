import { Button, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { Character } from '../../../../../models/app';
import { AssistState } from '../../../../../models/app/helper_models/content.models';
import './assist.scss'

export interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    assistContent: (assist: AssistState, currentCharacter: number | undefined, action: string | undefined, contentTarget?: string | undefined) => void;
    loading: boolean;
    editStatus: string | undefined;
    currentCharacter: Character | undefined,
    contentTarget?: string | undefined,
}

export type AssistDialogProps = OwnProps;

const AssistDialog = (props: AssistDialogProps) => {
    const { onChange, assistContent, loading, currentCharacter, editStatus, contentTarget } = props;
    const [fieldsUpdated, updateFieldsUpdated] = useState(false);
    const [startup, startupUpdate] = useState('');
    const [active, activeUpdate] = useState('');
    const [blockstun, blockstunUpdate] = useState('');
    const [onscreen, onscreenUpdate] = useState('');
    const [hitStop, hitStopUpdate] = useState('');
    const [hitStun, hitStunUpdate] = useState('');
    const [picture, pictureUpdate] = useState('');
    const [notes, notesUpdate] = useState('');
    const [confirmDelete, confirmDeleteUpdate] = useState(false)

    if(contentTarget && currentCharacter && editStatus === 'edit' && !fieldsUpdated) {
        const target = currentCharacter.assists.find(x => x.id === contentTarget);
        if(target){
            startupUpdate(target.startup);
            activeUpdate(target.active);
            blockstunUpdate(target.blockstun);
            onscreenUpdate(target.onscreen);
            hitStopUpdate(target.hitstop);
            hitStunUpdate(target.hit_stun);
            notesUpdate(target.special_notes);
        }
        updateFieldsUpdated(true);
    }
    
    const assistState: AssistState = {
        startup: startup,
        active: active,
        blockstun: blockstun,
        onscreen: onscreen,
        hitstop: hitStop,
        hit_stun: hitStun,
        picture: picture,
        special_notes: notes,
    };   
    if(editStatus !== 'delete') {
        return (
            <div className='assist-contents'>
                <div className="content-row">
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
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Blockstun:
                        </div>
                        <div>
                            <input
                                id="blockstun"
                                name="blockstun"
                                value={blockstun}
                                placeholder='blockstun'
                                className="blockstun"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'blockstun', blockstunUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            On-screen:
                        </div>
                        <div>
                            <input
                                id="onscreen"
                                name="onscreen"
                                value={onscreen}
                                placeholder='onscreen'
                                className="onscreen"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'onscreen', onscreenUpdate);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-row">
                    <div>
                        <div className="label">
                            Hit Stop:
                        </div>
                        <div>
                            <input
                                id="hitstop"
                                name="hitstop"
                                value={hitStop}
                                placeholder='hitstop'
                                className="hitstop"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'hitstop', hitStopUpdate);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Hit Stun:
                        </div>
                        <div>
                            <input
                                id="hitstun"
                                name="hitstun"
                                value={hitStun}
                                placeholder='freeze frame'
                                className="hitstun"
                                type="text"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChange(event, 'hitstun', hitStunUpdate);
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
                        <Button variant="outlined" color="primary" disabled={loading} disableElevation className='submit' onClick={() => assistContent(assistState, currentCharacter?.id, editStatus)} >
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
                    <h3>Deleting a assist cannot be undone!</h3>
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
                            onClick={() => assistContent(assistState, currentCharacter?.id, editStatus)} >
                            {loading ? <CircularProgress /> : "Delete"}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default AssistDialog