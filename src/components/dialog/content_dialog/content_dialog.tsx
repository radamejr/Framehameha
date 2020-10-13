import { Button, Card, CardContent, CircularProgress } from "@material-ui/core";
import React from "react";
import CharacterDialog from "./content-types/character/character_dialog";
import './content_dialog.scss'

export interface OwnProps {
    editStatus: string | undefined;
    editType: string | undefined;
    loading: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
}

export type ContentDialogProps = OwnProps;

export const renderContentType = (type: string | undefined, onChange: { (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>): void }) => {
    switch(type){
        case 'character':
            return <CharacterDialog  onChange={onChange}/>
        case 'normal':
            return 'normal'
        case 'special':
            return 'special'
        case 'special_variant':
            return 'special_variant'
        case 'super':
            return 'super'
        case 'super_variant':
            return 'super_variant'
        case 'assist':
            return 'assist'
        default:
            return "No content type selected. Oops?"
    }    
}
    
const ContentDialog = (props: ContentDialogProps) => {
    const {editStatus, editType, loading, onChange } = props;
    return (
        <Card className="content-dialog">
            <CardContent className="content-card-contents">
                <div className="content-dialog-contents">
                    <div className="content-title">
                        {`${editStatus} ${editType}`}
                    </div>
                    <div className="contents">
                        {renderContentType(editType, onChange)}
                    </div>
                    <div className="submit">
                        <Button variant="outlined" color="primary" disabled={loading} disableElevation className='submit'>
                            {loading ? <CircularProgress /> : "Submit"}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContentDialog;