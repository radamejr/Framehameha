import React from 'react';
import DBButton from '../../../helpers/ui/DBButton';
import { Assist, Character } from '../../../models/app';
import AssistCard from './assists.card';
import AssistCardMobile from './assists.card.mobile';

import './assists.scss'

interface OwnProps {
    assists: Assist[] | undefined;
    admin: boolean | undefined,
    character: Character,
    mediaType: string,
}
type AssistsContainerProps = OwnProps;

const AssistsContainer = (props: AssistsContainerProps) => {
    const { assists, admin, character, mediaType } = props;

    const sortAssists = (a: Assist, b: Assist) => {
        const assistA = a.id
        const assistB = b.id
    
        let comparison = 0;
        if (assistA > assistB) {
          comparison = 1;
        }else if (assistA < assistB) {
          comparison = -1;
        }
        return comparison;
    } 

    const makeAssistCard = (assist: Assist, key: number) => {
        return ( 
            mediaType !== 'mobile' 
            ?
            <AssistCard assist={assist} key={key} admin={admin} character={character} />
            :
            <AssistCardMobile assist={assist} key={key} admin={admin} character={character} />
        )
    }

    const sortedAssists = assists?.sort(sortAssists);

    return (
        <div className={`assists-container ${mediaType}`}>
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
                sortedAssists 
                ?
                sortedAssists.map((n: Assist, key: number) => { 
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