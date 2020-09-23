import { combineReducers } from 'redux';
import CharacterReducer  from './character.data.reducer';
import UserReducer from './user.data.reducer';
import { CharacterDataReducerModel } from '../../models/reducer/characterData.reducer.model';
import { UserDataReducerModel } from '../../models/reducer/userData.reducer.model';

export default combineReducers({
    characterData: CharacterReducer,
    userData: UserReducer,
})

export interface StoreModel {
    characterData: CharacterDataReducerModel | undefined;
    userData: UserDataReducerModel | undefined;
    error: string | undefined;
}

