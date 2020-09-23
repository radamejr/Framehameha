import React from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadCharacters } from '../../../state/actions/character.actions';
import { Character } from '../../../models/app/character.model';
import { State } from '../../../state/reducers';
import { selectCharacters } from '../../../state/selectors';

const mapStateToProps = (state: State): StateProps => {
    const characters = selectCharacters(state);
    return { characters } 
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        dispatch,
        getCharacters: () => {
            dispatch(loadCharacters());
        }
    }
}

export interface StateProps {
    characters: Character[] | null;
}

export interface DispatchProps {
    dispatch: Dispatch;
    getCharacters: () => void;
}

export type HomeProps = DispatchProps & StateProps

const Home = (props: HomeProps) => {
    const { getCharacters, characters } = props;
    if(!characters){
        getCharacters();
    }
    return (
        <div>
            {!characters 
            ? 'no character data' 
            : characters.map((c: Character, key: number)=> {
                return(
                    <div key={key}>{c.name}</div>
                )
            })
            }             
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)