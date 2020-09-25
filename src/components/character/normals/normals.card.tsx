import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { Normal } from '../../../models/app';

interface OwnProps {
    normal: Normal | undefined;
}
type NormalsCardProps = OwnProps;

const NormalsCard = (props: NormalsCardProps) => {
    const { normal } = props;
    return (
        <Card className={'normal-card'} variant="outlined">
            <CardContent >
                {normal?.input}
            </CardContent>
        </Card>
            
        
    )
}   

export default NormalsCard;