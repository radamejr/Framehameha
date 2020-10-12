import React from 'react'
import { useDispatch } from "react-redux";
import { loadCharacters } from '../state/actions/character.actions';
import { getUserWithToken } from '../state/actions/user.actions';

const StartUp = () => {
    const dispatch = useDispatch();
    dispatch(loadCharacters())

    const token = localStorage.getItem('state');
    if(token) {
        const id = localStorage.getItem('id') || ''
        dispatch(getUserWithToken(id))
    }
    
    return <span />
}

export default StartUp