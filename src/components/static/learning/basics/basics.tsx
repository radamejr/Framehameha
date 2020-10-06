import React from 'react';
import LearningBasicData from '../../../../helpers/static_data/learning_data';
import { LearningData } from '../../../../models/app';
import LearningCard from '../learning.card';

const BasicsContent = () => {
    return (
        <div className="basics-container">
            {
                LearningBasicData.map((data: LearningData, key: number) => {
                    let flip: boolean;
                    if(key%2 === 0){
                        flip = false;
                    }
                    else {
                        flip = true;
                    }
                    return (
                        <div className="basics-card" key={key} >
                            <LearningCard section={data} type="basics" flip={flip} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BasicsContent