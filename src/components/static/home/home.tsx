import React from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        dispatch,
        dispatchGetCharacters: () => {
            
        }
    }
}

export interface DispatchProps {
    dispatch: Dispatch;
    dispatchGetCharacters: () => void;
}

export type HomeProps = DispatchProps

const Home = (props: HomeProps) => {
    const { dispatchGetCharacters } = props;

    dispatchGetCharacters();
    return (
        <div>
            Hello World!            
        </div>
    )
}


export default connect(null, mapDispatchToProps)(Home)