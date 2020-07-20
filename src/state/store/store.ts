import { createStore } from 'redux';
import appReducers from '../reducers';

const store = createStore(appReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store