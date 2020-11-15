import React from 'react';
import DBButton from '../../../helpers/ui/DBButton';
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
    const { assists, admin, character } = props;

    const makeAssistCard = (assist: Assist, key: number) => {
        return ( <AssistCard assist={assist} key={key} admin={admin} character={character} />)
    }
    return (
        <div className="assists-container">
            <div className="assists-header">
                <h2>
                    Assists
                </h2>
                {
                    admin ? 
                        <div className='admin-button'>
                            <DBButton type='add' content='assist' character={character} id={character.id} />
                        </div>
                    :
                    null
                }
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