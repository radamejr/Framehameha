import { Card, CardContent } from "@material-ui/core";
import React from "react";
import './content_dialog.scss'

export interface OwnProps {
    editStatus: string | undefined;
    editType: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
}

export type ContentDialogProps = OwnProps;

const ContentDialog = (props: ContentDialogProps) => {
    const {editStatus, editType } = props;
    return (
        <Card className="content-dialog">
            <CardContent className="content-card-contents">
                <div className="content-dialog-contents">
                    <div className="content-title">
                        {`${editStatus} ${editType}`}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContentDialog;