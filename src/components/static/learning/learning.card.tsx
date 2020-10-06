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
                            <iframe title={`${type}`} className="embed-responsive-item" width="570" height="315" src={section.embedContent} frameBorder="0" data-allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                                {section.details.map((detail: string, key: number) => {
                                    return (
                                    <p key={key}>{detail}</p>
                                    )
                                })}
                                {
                                section.contributor ? 
                                <p>Please make sure to visit the video creators channel, even subscribe <a href={section.contributor} target="_blank" rel="noopener noreferrer" role="button">here!</a></p>
                                :
                                null
                                }
                            </div>
                        }
                </div>
            </CardContent>
        </Card>
    )
}

export default LearningCard