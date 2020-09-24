
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Character } from "../../models/app/character.model";
import { State } from "../../state/reducers";
import { selectCharacter } from "../../state/selectors";
import CharacterContainer, { CharacterProps, OwnProps, StateProps } from "./character.container";


export const mapStateToProps = (state: State, ownProps: OwnProps):StateProps => {
    const route = ownProps.match.params.id
    const character: Character | null = selectCharacter(state, {id: route});
    return { character }
}

export const mergeProps = (stateProps: StateProps, dispatchProps: null, ownProps: OwnProps): CharacterProps => {
    return {
        ...stateProps,
        ...ownProps,

    }
}
export default withRouter(connect(mapStateToProps, null, mergeProps)(CharacterContainer));