import { createStore } from 'redux';
import characterReducer from '../reducers/character.data.reducer';

export default createStore(characterReducer);