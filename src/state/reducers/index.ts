import { combineReducers } from 'redux';
import characterReducer  from './character.data.reducer';
import userReducer from './user.data.reducer';
import { CharacterDataReducerModel } from '../../models/reducer/characterData.reducer.model';
import { UserDataReducerModel } from '../../models/reducer/userData.reducer.model';

const appReducers = combineReducers({
    characterData: characterReducer,
    userData: userReducer,
})

export interface StoreModel {
    characterData: CharacterDataReducerModel | undefined;
    userData: UserDataReducerModel | undefined;
}

export default appReducers;