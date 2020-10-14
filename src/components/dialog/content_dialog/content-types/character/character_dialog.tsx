import { Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CharacterState } from '../../../../../models/app/helper_models/content.models';
import './character.scss'
export interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    characterContent: (character: CharacterState, create: boolean, id?: string) => void;
    loading: boolean;
}

export type CharacterDialogProps = OwnProps;

const CharacterDialog = (props: CharacterDialogProps) => {
    const { onChange, characterContent, loading } = props;

    const [name, nameUpdate] = useState('');
    const [dlc, dlcUpdate] = useState('');
    const [discord, discordUpdate] = useState('');
    const [combo, comboUpdate] = useState('');
    const [icon, iconUpdate] = useState('');
    const [picture, pictureUpdate] = useState('');
    const [twitter, twitterUpdate] = useState('');
    const [about, aboutUpdate] = useState('');

    const characterState: CharacterState = {
        name: name,
        dlc: dlc === 'true' ? true : false,
        discord_link: discord,
        combo_doc_link: combo,
        icon: icon,
        character_picture: picture,
        twitter_tag: twitter,
        about: about,
    };   

    return (
        <div className='character-contents'>
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
                            placeholder='Character Name'
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
                        DLC?:
                    </div>
                    <div>
                        <input
                            id="dlc"
                            name="dlc"
                            value={dlc}
                            placeholder='false'
                            className="dlc"
                            type="text"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(event, 'dlc', dlcUpdate);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="content-row">
                <div>
                    <div className="label">
                        Discord:
                    </div>
                    <div>
                        <input
                            id="discord"
                            name="discord"
                            value={discord}
                            placeholder='dicord.gg'
                            className="discord"
                            type="text"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(event, 'discord', discordUpdate);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="label">
                        Combosuki:
                    </div>
                    <div>
                        <input
                            id="combo"
                            name="combo"
                            value={combo}
                            placeholder='combosuki.com'
                            className="combo"
                            type="text"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(event, 'combo', comboUpdate);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="content-row">
                <div>
                    <div className="label">
                        Twitter Tag:
                    </div>
                    <div>
                        <input
                            id="twitter"
                            name="twitter"
                            value={twitter}
                            placeholder='#DBFZ_TAG'
                            className="twitter"
                            type="text"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(event, 'twitter', twitterUpdate);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="label">
                        About:
                    </div>
                    <div>
                        <input
                            id="about"
                            name="about"
                            value={about}
                            placeholder='So this is a story'
                            className="about"
                            type="text"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(event, 'about', aboutUpdate);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="content-row">
                <div>
                    <div className="label">
                        Icon:
                    </div>
                    <div>
                        <input
                            id="icon"
                            name="icon"
                            placeholder='image'
                            className="icon"
                            type="file"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(event, 'icon', iconUpdate);
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
                    <Button variant="outlined" color="primary" disabled={loading} disableElevation className='submit' onClick={() => characterContent(characterState, true)} >
                        {loading ? <CircularProgress /> : "Submit"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CharacterDialog