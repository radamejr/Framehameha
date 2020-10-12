import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { clearMessage } from '../../state/actions/app.actions';

import { State } from '../../state/reducers'
import { selectMessage, selectMessageType } from '../../state/selectors';
import ToastContainer, { DispatchProps, StateProps } from './toast.container';

const mapStateToProps = (state: State):StateProps => {
    const message = selectMessage(state);
    const messageType = selectMessageType(state);
    
    return {
        message,
        messageType
    }
}

const mapDispatchToProps = (dispatch: Dispatch):DispatchProps => {
    
    return {
        dispatch,
        closeToast: (): void => {
            setTimeout(() => {
                dispatch(clearMessage());
            }, 3000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer)