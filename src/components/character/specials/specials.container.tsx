import React from 'react';
import { Special } from '../../../models/app';
import SpecialCard from './specials.card';

import './specials.scss'

interface OwnProps {
    specials: Special[] | undefined;
}

type SpecialsContainerProps = OwnProps;

const SpecialsContainer = (props: SpecialsContainerProps) => {
    const { specials } = props;

    const makeSpecialCard = (special: Special, key: number) => {
        return ( <SpecialCard special={special} key={key} />)
    }

    return (
        <div className="specials-container">
            <div className="specials-header">
                <h2>
                    Special Moves
                </h2>
            </div>
            {
                specials ?
                    specials.map((s: Special, key: number) => { 
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