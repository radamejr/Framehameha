import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Character } from '../../models/app/character.model';


export interface StateProps {
    character: Character | null
}
export interface OwnProps extends RouteComponentProps<{id: string}> {
    id?: string | null,
}
export type CharacterProps = StateProps & OwnProps;

const CharacterContainer = (props: CharacterProps) => {
    return (
        <div>Characters go here soon.</div>
    )
}

export default CharacterContainer