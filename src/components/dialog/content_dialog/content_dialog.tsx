import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { Character } from "../../../models/app";
import { CharacterState } from "../../../models/app/helper_models/content.models";
import CharacterDialog from "./content-types/character/character_dialog";
import './content_dialog.scss'

export interface OwnProps {
    editStatus: string | undefined;
    editType: string | undefined;
    loading: boolean;
    currentCharacter: Character | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    characterContent: (character: CharacterState, create: boolean, id?: number) => void;
}

export type ContentDialogProps = OwnProps;

export const renderContentType = (
    type: string | undefined, 
    loading: boolean,
    editStatus: string | undefined, 
    currentCharacter: Character | undefined,
    onChange: { (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>): void }, 
    characterContent: { (character: CharacterState, create: boolean, id?: number): void },
    ) => {
    switch(type){
        case 'character':
            return <CharacterDialog  onChange={onChange} currentCharacter={currentCharacter} characterContent={characterContent} loading={loading} editStatus={editStatus} />
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
    const {editStatus, editType, loading, currentCharacter, onChange, characterContent } = props;
    return (
        <Card className="content-dialog">
            <CardContent className="content-card-contents">
                <div className="content-dialog-contents">
                    <div className="content-title">
                        {`${editStatus} ${editType}`}
                    </div>
                    <div className="contents">
                        {renderContentType(editType, loading, editStatus, currentCharacter, onChange, characterContent,)}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContentDialog;