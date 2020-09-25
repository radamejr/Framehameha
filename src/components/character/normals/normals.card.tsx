import React from 'react';
import { Card, CardContent, Divider, Table, TableCell, TableContainer, TableRow, TableBody } from '@material-ui/core';
import { Normal } from '../../../models/app';
import VisualGraph from '../../../helpers/visual_frame_data_graph/frame_data_graph';

interface OwnProps {
    normal: Normal | undefined;
}
type NormalsCardProps = OwnProps;

const NormalsCard = (props: NormalsCardProps) => {
    const { normal } = props;
    if(normal){
        return (
            <Card className="normal-card" variant="outlined">
                <CardContent className="normal-content" >
                    <div className="normal-image">
                        <img src={normal.picture.url} alt={normal.input}/>
                    </div>
                    <Divider orientation="vertical" variant="middle"/>
                    <div className="normal-data">
                        <TableContainer className="normal-data-table-one" >
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Input:</TableCell>
                                        <TableCell>{normal.input}</TableCell>
                                        <TableCell>Recovery:</TableCell>
                                        <TableCell>{normal.recovery}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Startup:</TableCell>
                                        <TableCell>{normal.startup}</TableCell>
                                        <TableCell>Advantage:</TableCell>
                                        <TableCell>{normal.advantage}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Active:</TableCell>
                                        <TableCell>{normal.active}</TableCell>
                                        <TableCell>Gaurd:</TableCell>
                                        <TableCell>{normal.gaurd}</TableCell>
                                    </TableRow>
                                    <TableRow className="notes-row"> 
                                        <TableCell colSpan={4}>
                                            {`Notes: ${normal.special_notes}`}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="normal-graph">
                            <VisualGraph startup={normal.startup} active={normal.active} recovery={normal.recovery} />
                        </div>
                    </div>
                </CardContent>
            </Card>        
        )
    } else {
        return null;
    }
    
}   

export default NormalsCard;