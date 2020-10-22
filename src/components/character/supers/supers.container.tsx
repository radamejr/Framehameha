import React from 'react';
import { Character, Super } from '../../../models/app';
import SuperCard from './supers.card';

import './supers.scss'

interface OwnProps {
    supers: Super[] | undefined;
    admin: boolean | undefined,
    character: Character,
}

type SpecialsContainerProps = OwnProps;

const SpecialsContainer = (props: SpecialsContainerProps) => {
    const { supers } = props;

    const makeSpecialCard = (super_move: Super, key: number) => {
        return ( <SuperCard super_move={super_move} key={key} />)
    }

    return (
        <div className="supers-container">
            <div className="supers-header">
                <h2>
                    Super Moves
                </h2>
            </div>
            {
                supers ?
                    supers.map((s: Super, key: number) => { 
                        return (
                        makeSpecialCard(s, key)   
                        )                
                    }) 
                    : 
                    null
            }      
        </div>
    )
}

export default SpecialsContainer