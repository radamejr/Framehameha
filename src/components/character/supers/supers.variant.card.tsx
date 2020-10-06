import { TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import React from 'react';
import VisualGraph from '../../../helpers/visual_frame_data_graph/frame_data_graph';
import { SuperVariant } from '../../../models/app';

import './supers.scss'

interface OwnProps {
    variant: SuperVariant;
    key: number
}

type SuperVariantsProps = OwnProps;

const SuperVariantsCard = (props: SuperVariantsProps) => {
    const { variant } = props;
    return (
        <div className="super-variant-card">
            <div className="super-variant-content">
                {variant.picture 
                ? 
                <div className="super-variant-image">
                    <img src={variant.picture.url} alt={variant.input_type}/>
                </div>
                : 
                null
                }
                
                <div className="variant-data">
                    <TableContainer className="variant-data-table-one" >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Input:</TableCell>
                                    <TableCell>{variant.input_type}</TableCell>
                                    <TableCell>Recovery:</TableCell>
                                    <TableCell>{variant.recovery}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Startup:</TableCell>
                                    <TableCell>{variant.startup}</TableCell>
                                    <TableCell>Advantage:</TableCell>
                                    <TableCell>{variant.advantage}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Active:</TableCell>
                                    <TableCell>{variant.active}</TableCell>
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

export default SuperVariantsCard;