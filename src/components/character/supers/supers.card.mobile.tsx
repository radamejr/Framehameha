import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Character, Super, SuperVariant } from '../../../models/app';
import DBButton from '../../../helpers/ui/DBButton';
import VisualGraph from '../../../helpers/visual_frame_data_graph/frame_data_graph';
import SuperVariantsMobileCard from './supers.variant.card.mobile';

interface OwnProps {
    super_move: Super | undefined;
    admin: boolean | undefined;
    character: Character | null;
}

type SuperCardMobileProps = OwnProps;

const SuperCardMobile = (props: SuperCardMobileProps) => {
    const { super_move, admin, character } = props;
    if(super_move) {
        return (
            <Card className="super-card" variant="outlined">
                <CardContent className="super-details" >
                    <div className="super-content">
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
                                        <TableCell>Name:</TableCell>
                                        <TableCell>{super_move.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Input:</TableCell>
                                        <TableCell>{super_move.input}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Recovery:</TableCell>
                                        <TableCell>{super_move.recovery}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Startup:</TableCell>
                                        <TableCell>{super_move.startup}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Advantage:</TableCell>
                                        <TableCell>{super_move.advantage}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Active:</TableCell>
                                        <TableCell>{super_move.active}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Guard:</TableCell>
                                        <TableCell>{super_move.gaurd}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Raw Damage:</TableCell>
                                        <TableCell>{super_move.raw_damage}</TableCell>
                                    </TableRow>
                                    <TableRow>
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
                        </div>
                    </div>
                    <div className="super-graph">
                        <VisualGraph startup={super_move.startup} active={super_move.active} recovery={super_move.recovery} />
                    </div>
                </CardContent>
                {
                    admin 
                    ? 
                    super_move.super_variants.length < 1 
                    ?
                    <div className='admin-button'>
                        Need variants?
                        <DBButton type='add' content='super_variant' character={character} id={character?.id} contentParent={super_move?.id} />
                    </div>
                    :
                    null
                    : 
                    null
                }
                {
                    super_move.super_variants.length > 0 
                    ? 
                    <CardContent className="super-variant-content accordion" >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                {super_move.name} Variants
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="super-variants-container">
                                    {super_move.super_variants.map((v: SuperVariant, key: number) => {
                                        return (
                                            <SuperVariantsMobileCard variant={v} key={key} admin={admin} character={character} parentId={super_move?.id}/>
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

export default SuperCardMobile;