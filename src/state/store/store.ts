import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import appReducers, { State } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import { saveState } from '../../helpers/api/localStorage';

const env = process.env.NODE_ENV
const middlewares = [promiseMiddleware]

if(env === 'development'){
    middlewares.push(logger)
}

const store = createStore(
    appReducers, 
    composeWithDevTools(applyMiddleware(...middlewares))
);

export const saveToken = (state: State) => {
    const token = state.userData?.userInfo?.token;
    const id = state.userData?.userInfo?.id;
    if(token || token === '') {
        saveState(token, id)
    }
}
    
store.subscribe(() => {
    saveToken(store.getState())
})

export default store