import React from 'react';
import { useHistory } from "react-router-dom";
import { Dispatch } from 'redux';
import { User } from "../../models/app/user.model";

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
                <div>
                    admin stuff here soon
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