import { TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import React from 'react';
import DBButton from '../../../helpers/ui/DBButton';
import VisualGraph from '../../../helpers/visual_frame_data_graph/frame_data_graph';
import { Character, SpecialVariant } from '../../../models/app';

import './specials.scss'

interface OwnProps {
    variant: SpecialVariant;
    key: number;
    admin: boolean | undefined;
    character: Character | null;
    parentId: string;
}

type SpecialVariantsProps = OwnProps;

const SpecialVariantsCardMobile = (props: SpecialVariantsProps) => {
    const { variant, admin, character, parentId } = props;
    return (
        <div className="special-variant-card">
            <div className="special-variant-content">
                {(variant.picture.url !== null || variant.picture.url !== '')
                ? 
                <div className="special-variant-image">
                    <img src={variant.picture.url} alt={variant.input_type}/>
                </div>
                : 
                null
                }
                
                <div className="variant-data">
                    {
                        admin ? 
                            <div className='admin-button'>
                                <DBButton type='edit' content='special_variant' character={character} id={character?.id} contentId={variant?.id} contentParent={parentId} />
                                <DBButton type='delete' content='special_variant' character={character} id={character?.id} contentId={variant?.id} contentParent={parentId} />
                            </div>
                        :
                        null
                    }
                    <TableContainer className="variant-data-table-one" >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Input:</TableCell>
                                    <TableCell>{variant.input_type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Recovery:</TableCell>
                                    <TableCell>{variant.recovery}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Startup:</TableCell>
                                    <TableCell>{variant.startup}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Advantage:</TableCell>
                                    <TableCell>{variant.advantage}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Active:</TableCell>
                                    <TableCell>{variant.active}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Guard:</TableCell>
                                    <TableCell>{variant.gaurd}</TableCell>
                                </TableRow>
                                <TableRow className="notes-row"> 
                                    <TableCell colSpan={4}>
                                        {`Notes: ${variant.special_notes}`}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="variant-graph">
                        <VisualGraph startup={variant.startup} active={variant.active} recovery={variant.recovery} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialVariantsCardMobile;