import './login_dialog.scss'

import { Button, Card, CardContent, CircularProgress, Link } from "@material-ui/core";

import React, { useState } from "react";

export interface OwnProps {
    toggleLogin: (type: string) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    loggingIn: boolean | undefined;
}
export type LoginDialogProps = OwnProps;

const LoginDialog = (props: LoginDialogProps) => {
    const { toggleLogin, onChange, loggingIn } = props;

    const [username, usernameUpdate] = useState('');
    const [password,passwordUpdate] = useState('');

    return (
        <Card className="login-dialog">
            <CardContent className='login-card-contents'>
                <div className="login-dialog-contents">
                    <div className="login-title">
                        Login
                    </div>
                    <div className="credentials">
                        <div className="label">Username:</div>
                            <div>
                                <input 
                                    id="username"
                                    name="username"
                                    value={username}
                                    placeholder='DBFighter'
                                    className='username-input'
                                    type="text"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        onChange(event, 'username', usernameUpdate);
                                    }}
                                />
                            </div>
                        
                    </div>
                    <div className="credentials">
                        <div className="label">Password:</div>
                            <div>
                                <input 
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder='rockstheDrag0n'
                                    className='password-input'
                                    type="password"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        onChange(event, 'password', passwordUpdate);
                                    }}
                                />
                            </div>
                    </div>
                    
                    <div className='buttons'>
                        <div className='login'>
                            <Button className='login-button' disabled={loggingIn} >
                                {loggingIn ? <CircularProgress /> : 'Login'}
                            </Button>
                        </div>
                        <div className="create-account">
                            <p>
                                Don't have an account? <Link onClick={() => toggleLogin('create_user')}>click here.</Link>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default LoginDialog;