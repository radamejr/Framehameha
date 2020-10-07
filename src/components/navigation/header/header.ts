import './header.scss'

import Header, { DispatchProps, HeaderProps, StateProps } from './header.container'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { logoutUser, setLoginStatus } from '../../../state/actions/user.actions';
import { selectCharacters, selectUser } from '../../../state/selectors';

import { Dispatch } from 'redux';
import { State } from '../../../state/reducers'
import { User } from '../../../models/app/user.model';
import { connect } from 'react-redux';
import { loadCharacters } from '../../../state/actions/character.actions';

export const mapStateToProps = (state: State): StateProps => {
    const characters = selectCharacters(state);
    const user = selectUser(state);
    return { characters, user }
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        dispatch,
        getCharacters: () => {
            dispatch(loadCharacters());
        },
    }
}
export const mergeProps = (
    stateProps: StateProps, 
    dispatchProps: DispatchProps,
    ownProps: RouteComponentProps): HeaderProps => {
    const { history } = ownProps;
    const { dispatch } = dispatchProps;
    return {
        ...stateProps,
        ...dispatchProps,
        handleCharacterClick: (id: number) => {
            history.push(`/characters/${id}`)
        },
        toggleLogin: (user: User | null) => {
            if(user){
                dispatch(logoutUser())
            } else {
                dispatch(setLoginStatus('login'))
            }
        },
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header))