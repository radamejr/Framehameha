import React from 'react';
import { Card, CardContent, Divider, Table, TableCell, TableContainer, TableRow, TableBody } from '@material-ui/core';
import { Assist, Character } from '../../../models/app';
import VisualGraph from '../../../helpers/visual_frame_data_graph/frame_data_graph';
import DBButton from '../../../helpers/ui/DBButton';

interface OwnProps {
    assist: Assist | undefined;
    admin: boolean | undefined;
    character: Character | null;
}
type AssistsCardProps = OwnProps;

const AssistCard = (props: AssistsCardProps) => {
    const { assist, admin, character } = props;
    if(assist){
        return (
            <Card className="assist-card" variant="outlined">
                <CardContent className="assist-details" >
                    <div className="assist-content">
                        <div className="assist-image">
                            <img src={assist.picture.url} alt={assist.character_id}/>
                        </div>
                        <Divider orientation="vertical" variant="middle"/>
                        <div className="assist-data">
                            {
                                admin ? 
                                    <div className='admin-button'>
                                        <DBButton type='edit' content='assist' character={character} id={character?.id} contentId={assist?.id}/>
                                        <DBButton type='delete' content='assist' character={character} id={character?.id} contentId={assist?.id}/>
                                    </div>
                                :
                                null
                            }
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
                    </div>
                    <div className="assist-graph">
                        <VisualGraph startup={assist.startup} active={assist.active} recovery={null} onScreen={assist.onscreen} />
                    </div>
                </CardContent>
            </Card>        
        )
    } else {
        return null;
    }
    
}   

export default AssistCard;