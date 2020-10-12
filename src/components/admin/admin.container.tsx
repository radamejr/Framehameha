import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from "react-router-dom";
import { Dispatch } from 'redux';
import { User } from "../../models/app/user.model";
import './admin.scss'

export interface StateProps{
    user: User | null;
    loggingIn: boolean | undefined;
}

export interface DispatchProps{
    dispatch: Dispatch;
}

export type AdminOptionsProps = StateProps & DispatchProps;

const AdminContainer = (props: AdminOptionsProps) => {
    const { user, loggingIn } = props;
    const history = useHistory();
    
    if(!loggingIn){
        if(user?.admin){
            return (
                <div className="admin-container">
                    <div className="tasks">
                        <div className="title">
                            <Button variant="contained" color="primary" >Add Character +</Button>
                        </div>
                    </div>
                </div>
            )
        } else {
            history.push('/')
            return ( null )
        }
    } else {
        return ( null )
    }
}

export default AdminContainer