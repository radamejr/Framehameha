import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Assist, Character, Normal, Special, Super } from "../../models/app/index";
import AboutContainer from './about/about.container';
import './character.scss'

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
        return ( 
            null 
            )
    } else {
        return (
            <div className="character-container">
                <AboutContainer character={character} />
            </div>
        )
    }
    
}

export default CharacterContainer