import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Assist, Character, Normal, Special, Super } from "../../models/app/index";


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
    return (
        <div>Characters go here soon.</div>
    )
}

export default CharacterContainer