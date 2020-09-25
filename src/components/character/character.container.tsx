import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Assist, Character, Normal, Special, Super } from "../../models/app/index";
import AboutContainer from './about/about.container';
import NormalsContainer from './normals/normals.container';
import './character.scss'
import { Divider } from '@material-ui/core';
import SpecialsContainer from './specials/specials.container';


export interface StateProps {
    character: Character | null,
    normals: Normal[] | undefined,
    specials: Special[] | undefined,
    supers: Super[] | undefined,
    assists: Assist[] | undefined,
}
export interface OwnProps extends RouteComponentProps<{id: string}> {
    id?: string | null,
}
export type CharacterProps = StateProps & OwnProps;

const CharacterContainer = (props: CharacterProps) => {
    const { character, normals, specials, supers, assists } = props;
    if(!character){
        return ( null )
    } else {
        return (
            <div className="character-container">
                <AboutContainer character={character} />
                <Divider variant="middle" />
                <NormalsContainer normals={normals}/>
                <Divider variant="middle" />
                <SpecialsContainer specials={specials}/>
            </div>
        )
    }
    
}

export default CharacterContainer