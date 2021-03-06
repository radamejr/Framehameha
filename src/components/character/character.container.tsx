import React from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { Assist, Character, Normal, Special, Super } from "../../models/app/index";
import { User } from '../../models/app/user.model';
import AboutContainer from './about/about.container';
import NormalsContainer from './normals/normals.container';
import SpecialsContainer from './specials/specials.container';
import SupersContainer from './supers/supers.container'
import AssistsContainer from './assists/assists.container';
import './character.scss'


export interface StateProps {
    character: Character | null,
    normals: Normal[] | undefined,
    specials: Special[] | undefined,
    supers: Super[] | undefined,
    assists: Assist[] | undefined,
    user: User | null,
    loadingCharacters: boolean,
}
export interface OwnProps extends RouteComponentProps<{id: string}> {
    id?: number | null,
    mediaType: string,
}
export type CharacterProps = StateProps & OwnProps;

const CharacterContainer = (props: CharacterProps) => {
    const { character, normals, specials, supers, assists, user, loadingCharacters, mediaType } = props;
    const history = useHistory();
    if(!character){
        if(!loadingCharacters){
            history.push('/')
        }
        return (null)
    } else {
        return (
            <div className={`character-container ${mediaType}`}>
                <AboutContainer character={character} admin={user?.admin} mediaType={mediaType}/>
                <Divider variant="middle" />
                <NormalsContainer normals={normals} admin={user?.admin} character={character} mediaType={mediaType}/>
                <Divider variant="middle" />
                <SpecialsContainer specials={specials} admin={user?.admin} character={character} mediaType={mediaType}/>
                <Divider variant="middle" />
                <SupersContainer supers={supers} admin={user?.admin} character={character} mediaType={mediaType}/>
                <Divider variant="middle" />
                <AssistsContainer assists={assists} admin={user?.admin} character={character} mediaType={mediaType}/>
            </div>
        )
    }
    
}

export default CharacterContainer