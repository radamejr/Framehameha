import LearningCard from '../learning.card';
import { LearningData } from '../../../../models/app';
import LearningNeutralData from '../../../../helpers/static_data/neutral_data';
import React from 'react';

const NeutralContent = () => {  
    return (
        <div className="neutral-container">
            {
                LearningNeutralData.map((data: LearningData, key: number) => {
                    let flip: boolean;
                    if(key%2 === 0){
                        flip = false;
                    }
                    else {
                        flip = true;
                    }
                    return (
                        <div className="neutral-card" key={key} >
                            <LearningCard section={data} type="neutral" flip={flip} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NeutralContent