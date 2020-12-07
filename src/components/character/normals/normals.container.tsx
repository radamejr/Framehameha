import React from 'react';
import { Character, Normal } from '../../../models/app';
import DBButton from '../../../helpers/ui/DBButton'
import NormalsCard from './normals.card';

import './normal.scss'
import NormalsCardMobile from './normals.card.mobile';

interface OwnProps {
    normals: Normal[] | undefined;
    admin: boolean | undefined,
    character: Character,
    mediaType: string,
}
type NormalsContainerProps = OwnProps;

const NormalsContainer = (props: NormalsContainerProps) => {
    const { normals, admin, character, mediaType } = props;

    const makeNormalCard = (normal: Normal, key: number) => {
        return ( 
            mediaType !== 'mobile' 
            ? 
            <NormalsCard normal={normal} character={character} admin={admin || false} key={key} /> 
            :
            <NormalsCardMobile normal={normal} character={character} admin={admin || false} key={key} />
        )
    }
    return (
        <div className={`normals-container ${mediaType}`}>
            <div className="normals-header">
                <h2>
                    Normal Moves
                </h2>
                {
                    admin ? 
                        <div className='admin-button'>
                            <DBButton type='add' content='normal' character={character} id={character.id} />
                        </div>
                    :
                    null
                }
            </div>
            
            {
                normals 
                ?
                normals.map((n: Normal, key: number) => { 
                    return (
                    makeNormalCard(n, key)   
                    )                
                }) 
                : 
                null
            }      
        </div>
    )
}

export default NormalsContainer;