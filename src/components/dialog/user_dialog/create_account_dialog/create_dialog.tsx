import './create_dialog.scss'

import { Button, Card, CardContent } from "@material-ui/core";

import React from "react";

export interface OwnProps {
    toggleLogin: (type: string) => void;
}
export type CreateDialogProps = OwnProps;

const CreateDialog = (props: CreateDialogProps) => {
    const { toggleLogin } = props;
    return (
        <Card className="create-dialog">
            <CardContent>
                We will be making a create Dialog here

                <Button onClick={() => toggleLogin('login')}>
                    Login
                </Button>
            </CardContent>
        </Card>
    )
}

export default CreateDialog;