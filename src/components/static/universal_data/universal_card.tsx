import React from 'react';
import { Card, CardContent, Divider, Table, TableCell, TableContainer, TableRow, TableBody } from '@material-ui/core';
import VisualGraph from '../../../helpers/visual_frame_data_graph/frame_data_graph';
import { UniversalData } from '../../../models/app';

interface OwnProps {
    universalData: UniversalData | undefined;
}
type UniversalCardProps = OwnProps;

const UniversalCard = (props: UniversalCardProps) => {
    const { universalData } = props;
    if(universalData){
        return (
            <Card className="universal-card" variant="outlined">
                <CardContent className="universal-content" >
                    <div className="universal-image">
                        <img src={universalData.img} alt={universalData.input}/>
                    </div>
                    <Divider orientation="vertical" variant="middle"/>
                    <div className="universal-data">
                        <TableContainer className="universal-data-table-one" >
                            <Table>
                                <TableBody>
                                    {universalData.ability ? 
                                    <TableRow className="ability-row">
                                        <TableCell colSpan={4} align={'center'}>Ability: {universalData.ability}</TableCell>
                                    </TableRow>
                                    :
                                    null
                                    }
                                    <TableRow>
                                        <TableCell>Input:</TableCell>
                                        <TableCell>{universalData.input}</TableCell>
                                        <TableCell>Recovery:</TableCell>
                                        <TableCell>{universalData.recovery}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Startup:</TableCell>
                                        <TableCell>{universalData.startup}</TableCell>
                                        <TableCell>Advantage:</TableCell>
                                        <TableCell>{universalData.advantage}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Active:</TableCell>
                                        <TableCell>{universalData.active}</TableCell>
                                        <TableCell>Guard:</TableCell>
                                        <TableCell>{universalData.gaurd}</TableCell>
                                    </TableRow>
                                    <TableRow className="notes-row"> 
                                        <TableCell colSpan={4}>
                                            {`Notes: ${universalData.notes}`}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="universal-graph">
                            <VisualGraph startup={universalData.startup} active={universalData.active} recovery={universalData.recovery} />
                        </div>
                    </div>
                </CardContent>
            </Card>        
        )
    } else {
        return null;
    }
    
}   

export default UniversalCard;