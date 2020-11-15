import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Character, Super, SuperVariant } from '../../../models/app';
import SuperVariantsCard from './supers.variant.card';
import DBButton from '../../../helpers/ui/DBButton';
import VisualGraph from '../../../helpers/visual_frame_data_graph/frame_data_graph';

interface OwnProps {
    super_move: Super | undefined;
    admin: boolean | undefined;
    character: Character | null;
}
//TODO: fix super card to look like normals, with added variants for some characters (add accordion if variants exist)
type SuperCardProps = OwnProps;

const SuperCard = (props: SuperCardProps) => {
    const { super_move, admin, character } = props;
    if(super_move) {
        return (
            <Card className="super-card" variant="outlined">
                <CardContent className="super-content" >
                    <div className="super-image">
                        <img src={super_move.picture.url} alt={super_move.input}/>
                    </div>
                    <Divider orientation="vertical" variant="middle"/>
                    <div className="super-info">
                    {
                            admin ? 
                                <div className='admin-button'>
                                    <DBButton type='edit' content='super' character={character} id={character?.id} contentId={super_move?.id}/>
                                    <DBButton type='delete' content='super' character={character} id={character?.id} contentId={super_move?.id}/>
                                </div>
                            :
                            null
                    }
                    <TableContainer className="super-data-table-one" >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2} align='center'>Name:</TableCell>
                                    <TableCell colSpan={2} align='center'>{super_move.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Input:</TableCell>
                                    <TableCell>{super_move.input}</TableCell>
                                    <TableCell>Recovery:</TableCell>
                                    <TableCell>{super_move.recovery}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Startup:</TableCell>
                                    <TableCell>{super_move.startup}</TableCell>
                                    <TableCell>Advantage:</TableCell>
                                    <TableCell>{super_move.advantage}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Active:</TableCell>
                                    <TableCell>{super_move.active}</TableCell>
                                    <TableCell>Guard:</TableCell>
                                    <TableCell>{super_move.gaurd}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Raw Damage:</TableCell>
                                    <TableCell>{super_move.raw_damage}</TableCell>
                                    <TableCell>Scaled Damage:</TableCell>
                                    <TableCell>{super_move.scaled_damage}</TableCell>
                                </TableRow>
                                <TableRow className="notes-row"> 
                                    <TableCell colSpan={4}>
                                        {`Notes: ${super_move.special_notes}`}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                        <div className="super-graph">
                            <VisualGraph startup={super_move.startup} active={super_move.active} recovery={super_move.recovery} />
                        </div>
                    </div>
                </CardContent>
                {
                    admin ? 
                        <div className='admin-button'>
                            Need variants?
                            <DBButton type='add' content='super_variant' character={character} id={character?.id} contentParent={super_move?.id} />
                        </div>
                    :
                    null
                }
                {
                    super_move.special_variants 
                    ? 
                    <CardContent className="super-content accordion" >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                {super_move.name} Variants
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="super-variants-container">
                                    {super_move.special_variants.map((v: SuperVariant, key: number) => {
                                        return (
                                            <SuperVariantsCard variant={v} key={key}/>
                                        )
                                    })}  
                                </div>  
                            </AccordionDetails>
                        </Accordion>
                    </CardContent>
                    :
                    null
                }                
            </Card>
        )
    } else {
        return null;
    }
}

export default SuperCard;