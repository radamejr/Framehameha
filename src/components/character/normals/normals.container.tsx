import React from 'react';
import { Normal } from '../../../models/app';
import NormalsCard from './normals.card';

import './normal.scss'

interface OwnProps {
    normals: Normal[] | undefined;
}
type NormalsContainerProps = OwnProps;

const NormalsContainer = (props: NormalsContainerProps) => {
    const { normals } = props;

    const makeNormalCard = (normal: Normal, key: number) => {
        return ( <NormalsCard normal={normal} key={key} />)
    }
    return (
        <div className="normals-container">
            <div className="normals-header">
                <h2>
                    Normal Moves
                </h2>
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