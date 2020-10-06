import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { LearningData } from '../../../models/app';

export interface OwnProps {
    section: LearningData,
    type: string,
    flip: boolean,
}

const LearningCard = (props: OwnProps) => {
    const { section, type, flip } = props;
    return (
        <Card>
            <CardContent className={`${type}-card-container`}>
                <div className={`${type}-card-title-container`}>
                    <div className={`${type}-card-title`}>
                        {section.title}
                    </div>
                </div>
                <div className={`${type}-card-details-container flip-${flip}`}>
                    <div className={`${type}-card-embed`}>
                        { 
                            section.contributor 
                            ? 
                            '' 
                            : 
                            <img src={section.embedContent}/>
                        }
                    </div>
                        {
                            section.title === 'Sparking!' ? 
                            <div className={`${type}-card-details`}>
                                {
                                <p>
                                    {section.details[0]}
                                </p>
                                }
                                <ul>
                                    {section.details.map((detail: string, key: number) => {
                                        if(key > 0){
                                            return (<li key={key}>{detail}</li>)    
                                        }   
                                    })
                                    }
                                </ul>
                            
                                {
                                section.contributor ? 
                                ''
                                :
                                ''
                                }
                            </div>
                            :
                            <div className={`${type}-card-details`}>
                                {section.details.map((detail: string) => {
                                    return (
                                    <p>{detail}</p>
                                    )
                                })}
                                {
                                section.contributor ? 
                                ''
                                :
                                ''
                                }
                            </div>
                        }
                </div>
            </CardContent>
        </Card>
    )
}

export default LearningCard