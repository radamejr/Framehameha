
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Assist, Normal, Special, Super } from "../../models/app/index";
import { State } from "../../state/reducers";
import { selectCharacter, selectCharacters, selectUser } from "../../state/selectors";
import CharacterContainer, { CharacterProps, OwnProps, StateProps } from "./character.container";


export const mapStateToProps = (state: State, ownProps: OwnProps):StateProps => {
    const route = ownProps.match.params.id
    const character = selectCharacter(state, {id: route});
    const characters = selectCharacters(state);
    const charCount = characters?.length;
    const user = selectUser(state);
    const normals: Normal[] | undefined = character?.normals
    const specials: Special[] | undefined = character?.specials
    const supers: Super[] | undefined = character?.supers
    const assists: Assist[] | undefined = character?.assists

    return { character, normals, specials, supers, assists, user }
}

export const mergeProps = (stateProps: StateProps, dispatchProps: null, ownProps: OwnProps): CharacterProps => {
    return {
        ...stateProps,
        ...ownProps,

    }
}
export default withRouter(connect(mapStateToProps, null, mergeProps)(CharacterContainer));