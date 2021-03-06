import { connect } from "react-redux";
import { Dispatch } from "redux";
import { updateEditStatus, updateEditType } from "../../state/actions/character.actions";
import { State } from "../../state/reducers";
import { selectLoggingIn, selectUser } from "../../state/selectors";
import AdminContainer, { DispatchProps, StateProps } from "./admin.container";

export const mapStateToProps = (state: State):StateProps => {
    const user = selectUser(state);
    const loggingIn = selectLoggingIn(state);
    return {
        user,
        loggingIn
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        dispatch,
        addCharacter: ():void => {
            dispatch(updateEditStatus('add'));
            dispatch(updateEditType('character'));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)