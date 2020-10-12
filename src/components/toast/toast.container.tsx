import React from 'react'
import { Dispatch } from 'redux';
import './toast.scss'

export interface StateProps {
    message: string | null | undefined,
    messageType: string | null | undefined,
}

export interface DispatchProps {
    dispatch: Dispatch,
    closeToast: () => void,
}

export type ToastMessageProps =  StateProps & DispatchProps;

const ToastContainer = (props: ToastMessageProps) => {
    const { message, messageType, closeToast } = props;
    if(message && messageType) {
        closeToast()
        return (
            <div className={`message-container ${messageType} visible`}>
                <div>{message}</div>
            </div>
        )
    } else {
        return null
    }
}


export default ToastContainer