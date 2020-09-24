import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { loadCharacters } from '../../../state/actions/character.actions';
import { State } from '../../../state/reducers'
import { selectCharacters } from '../../../state/selectors';
import Header, { DispatchProps, HeaderProps, StateProps } from './header.container'
import './header.scss'

export const mapStateToProps = (state: State): StateProps => {
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
export const mergeProps = (
    stateProps: StateProps, 
    dispatchProps: DispatchProps,
    ownProps: RouteComponentProps): HeaderProps => {
    const { history } = ownProps;
    return {
        ...stateProps,
        ...dispatchProps,
        handleCharacterClick: (id: number) => {
            history.push(`/characters/${id}`)
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header))