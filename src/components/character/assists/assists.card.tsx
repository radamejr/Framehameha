import React from 'react';
import { Card, CardContent, Divider, Table, TableCell, TableContainer, TableRow, TableBody } from '@material-ui/core';
import { Assist } from '../../../models/app';

interface OwnProps {
    assist: Assist | undefined;
}
type AssistsCardProps = OwnProps;

const AssistCard = (props: AssistsCardProps) => {
    const { assist } = props;
    if(assist){
        return (
            <Card className="assist-card" variant="outlined">
                <CardContent className="assist-content" >
                    <div className="assist-image">
                        <img src={assist.picture.url} alt={assist.character_id}/>
                    </div>
                    <Divider orientation="vertical" variant="middle"/>
                    <div className="assist-data">
                        <TableContainer className="assist-data-table-one" >
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Startup:</TableCell>
                                        <TableCell>{assist.startup}</TableCell>
                                        <TableCell>Onscreen:</TableCell>
                                        <TableCell>{assist.onscreen}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Hitstop Block/Hit:</TableCell>
                                        <TableCell>{assist.hitstop}</TableCell>
                                        <TableCell>Hit Stun:</TableCell>
                                        <TableCell>{assist.hit_stun}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Active:</TableCell>
                                        <TableCell>{assist.active}</TableCell>
                                        <TableCell>Guard:</TableCell>
                                        <TableCell>{assist.blockstun}</TableCell>
                                    </TableRow>
                                    <TableRow className="notes-row"> 
                                        <TableCell colSpan={4}>
                                            {`Notes: ${assist.special_notes}`}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </CardContent>
            </Card>        
        )
    } else {
        return null;
    }
    
}   

export default AssistCard;