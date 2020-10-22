import React from 'react';
import { Assist, Character } from '../../../models/app';
import AssistCard from './assists.card';

import './assists.scss'

interface OwnProps {
    assists: Assist[] | undefined;
    admin: boolean | undefined,
    character: Character,
}
type AssistsContainerProps = OwnProps;

const AssistsContainer = (props: AssistsContainerProps) => {
    const { assists } = props;

    const makeAssistCard = (assist: Assist, key: number) => {
        return ( <AssistCard assist={assist} key={key} />)
    }
    return (
        <div className="assists-container">
            <div className="assists-header">
                <h2>
                    Assists
                </h2>
            </div>
            {
                assists 
                ?
                assists.map((n: Assist, key: number) => { 
                    return (
                    makeAssistCard(n, key)   
                    )                
                }) 
                : 
                null
            }      
        </div>
    )
}

export default AssistsContainer;