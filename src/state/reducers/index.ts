import { combineReducers } from 'redux';
import CharacterReducer  from './character.data.reducer';
import UserReducer from './user.data.reducer';
import MessageReducer from './message.data.reducer';
import { CharacterDataReducerModel } from '../../models/reducer/characterData.reducer.model';
import { UserDataReducerModel } from '../../models/reducer/userData.reducer.model';
import { MessageDataReducerModel } from '../../models/reducer/messageData.reducer.model';


export default combineReducers({
    characterData: CharacterReducer,
    userData: UserReducer,
    messageData: MessageReducer
})

export interface State {
    characterData?: CharacterDataReducerModel | undefined;
    userData?: UserDataReducerModel | undefined;
    messageData?: MessageDataReducerModel | undefined;
}

