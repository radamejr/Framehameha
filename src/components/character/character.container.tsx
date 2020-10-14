import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
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
}
export interface OwnProps extends RouteComponentProps<{id: string}> {
    id?: number | null,
}
export type CharacterProps = StateProps & OwnProps;

const CharacterContainer = (props: CharacterProps) => {
    const { character, normals, specials, supers, assists, user } = props;
    if(!character){
        return ( null )
    } else {
        return (
            <div className="character-container">
                <AboutContainer character={character} admin={user?.admin}/>
                <Divider variant="middle" />
                <NormalsContainer normals={normals}/>
                <Divider variant="middle" />
                <SpecialsContainer specials={specials}/>
                <Divider variant="middle" />
                <SupersContainer supers={supers} />
                <Divider variant="middle" />
                <AssistsContainer assists={assists} />
            </div>
        )
    }
    
}

export default CharacterContainer