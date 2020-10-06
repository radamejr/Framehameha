import React from 'react';
import LearningDefenseData from '../../../../helpers/static_data/defense_data';
import { LearningData } from '../../../../models/app';
import LearningCard from '../learning.card';

const DefenseContent = () => {
    return (
        <div className="defense-container">
            {
                LearningDefenseData.map((data: LearningData, key: number) => {
                    let flip: boolean;
                    if(key%2 === 0){
                        flip = false;
                    }
                    else {
                        flip = true;
                    }
                    return (
                        <div className="defense-card" key={key} >
                            <LearningCard section={data} type="defense" flip={flip} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DefenseContent