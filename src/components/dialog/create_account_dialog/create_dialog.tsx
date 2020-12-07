import './create_dialog.scss'

import { Button, Card, CardContent, CircularProgress, Link } from "@material-ui/core";

import React, { useState } from "react";

export interface OwnProps {
    loggingIn: boolean | undefined;
    toggleLogin: (type: string) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string, update: React.Dispatch<React.SetStateAction<string>>) => void;
    createUser: (email: string, username: string, password: string, confirmPassword: string) => void;
}
export type CreateDialogProps = OwnProps;

const CreateDialog = (props: CreateDialogProps) => {
    const { loggingIn, toggleLogin, onChange, createUser } = props;

    const [username, usernameUpdate] = useState('');
    const [email, emailUpdate] = useState('');
    const [password,passwordUpdate] = useState('');
    const [confirmPassword,confirmPasswordUpdate] = useState('');
    return (
        <Card className="create-dialog">
            <CardContent className='create-card-contents'>
                <div className="create-dialog-contents">
                    <div className="create-title">
                        Create Account
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
                        <div className="label">Email:</div>
                            <div>
                                <input 
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder='dbfighter@catchthesehands.net'
                                    className='email-input'
                                    type="text"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        onChange(event, 'email', emailUpdate);
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
                    <div className="credentials">
                        <div className="label">Confirm Password:</div>
                            <div>
                                <input 
                                    id="confirm-password"
                                    name="confirm-password"
                                    value={confirmPassword}
                                    placeholder='rockstheDrag0n'
                                    className='confirm-password-input'
                                    type="password"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        onChange(event, 'confirm-password', confirmPasswordUpdate);
                                    }}
                                />
                            </div>
                    </div>                    
                    <div className='buttons'>
                        <div className='create'>
                            <Button className='create-button' disabled={true} onClick={() => createUser(email, username, password, confirmPassword)} >
                                {loggingIn ? <CircularProgress /> : 'Coming Soon!'}
                            </Button>
                        </div>
                        <div className="create-account">
                            <p>
                                Already have an account? <Link onClick={() => toggleLogin('login')}>login.</Link>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CreateDialog;