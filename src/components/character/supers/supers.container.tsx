import React from 'react';
import DBButton from '../../../helpers/ui/DBButton';
import { Character, Super } from '../../../models/app';
import SuperCard from './supers.card';
import SuperCardMobile from './supers.card.mobile';

import './supers.scss'

interface OwnProps {
    supers: Super[] | undefined;
    admin: boolean | undefined,
    character: Character,
    mediaType: string,
}

type SpecialsContainerProps = OwnProps;

const SpecialsContainer = (props: SpecialsContainerProps) => {
    const { supers, admin, character, mediaType } = props;

    const makeSuperCard = (super_move: Super, key: number) => {
        return ( 
            mediaType !== 'mobile' 
            ?
            <SuperCard super_move={super_move} key={key} admin={admin} character={character} />
            :
            <SuperCardMobile super_move={super_move} key={key} admin={admin} character={character} />
        )
    }

    return (
        <div className={`supers-container ${mediaType}`}>
            <div className="supers-header">
                <h2>
                    Super Moves
                </h2>
                {
                    admin ? 
                        <div className='admin-button'>
                            <DBButton type='add' content='super' character={character} id={character.id} />
                        </div>
                    :
                    null
                }
            </div>
            {
                supers ?
                    supers.map((s: Super, key: number) => { 
                        return (
                        makeSuperCard(s, key)   
                        )                
                    }) 
                    : 
                    null
            }      
        </div>
    )
}

export default SpecialsContainer