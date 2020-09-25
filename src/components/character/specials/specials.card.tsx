import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Special, SpecialVariant } from '../../../models/app';
import SpecialVariantsCard from './special.variant.card';

interface OwnProps {
    special: Special | undefined;
}

type SpecialCardProps = OwnProps;

const SpecialCard = (props: SpecialCardProps) => {
    const { special } = props;
    if(special) {
        return (
            <Card className="special-card" variant="outlined">
                <CardContent className="special-content" >
                    <div className="special-image">
                        <img src={special.picture.url} alt={special.input}/>
                    </div>
                    <Divider orientation="vertical" variant="middle"/>
                    <div className="special-info">
                    <TableContainer className="special-data-table-one" >
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Name:</TableCell>
                                        <TableCell>{special.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Input:</TableCell>
                                        <TableCell>{special.input}</TableCell>
                                    </TableRow>
                                    <TableRow className="notes-row"> 
                                        <TableCell colSpan={4}>
                                            {`Description: ${special.special_notes}`}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </CardContent>
                {
                    special.special_variants 
                    ? 
                    <CardContent className="special-content accordion" >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                {special.name} Variants
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="special-variants-container">
                                    {special.special_variants.map((v: SpecialVariant, key: number) => {
                                        return (
                                            <SpecialVariantsCard variant={v} key={key}/>
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

export default SpecialCard;