import React from 'react';
import LearningOffenseData from '../../../../helpers/static_data/offense_data';
import { LearningData } from '../../../../models/app';
import LearningCard from '../learning.card';

const OffenseContent = () => {
    return (
        <div className="offense-container">
            {
                LearningOffenseData.map((data: LearningData, key: number) => {
                    let flip: boolean;
                    if(key%2 === 0){
                        flip = false;
                    }
                    else {
                        flip = true;
                    }
                    return (
                        <div className="offense-card" key={key} >
                            <LearningCard section={data} type="offense" flip={flip} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OffenseContent