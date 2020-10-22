import React from 'react';
import { Character, Normal } from '../../../models/app';
import DBButton from '../../../helpers/ui/db_button'
import NormalsCard from './normals.card';

import './normal.scss'

interface OwnProps {
    normals: Normal[] | undefined;
    admin: boolean | undefined,
    character: Character,
}
type NormalsContainerProps = OwnProps;

const NormalsContainer = (props: NormalsContainerProps) => {
    const { normals, admin, character } = props;

    const makeNormalCard = (normal: Normal, key: number) => {
        return ( <NormalsCard normal={normal} key={key} />)
    }
    return (
        <div className="normals-container">
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