import './login_dialog.scss'

import { Button, Card, CardContent } from "@material-ui/core";

import React from "react";

export interface OwnProps {
    toggleLogin: (type: string) => void;
}
export type LoginDialogProps = OwnProps;

const LoginDialog = (props: LoginDialogProps) => {
    const { toggleLogin } = props;
    return (
        <Card className="login-dialog">
            <CardContent>
                We will be making a login Dialog here

                <Button onClick={() => toggleLogin('create_user')}>
                    Create account
                </Button>
            </CardContent>
        </Card>
    )
}

export default LoginDialog;