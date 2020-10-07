import { applyMiddleware, createStore } from 'redux';

import appReducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [promiseMiddleware]

const store = createStore(
    appReducers, 
    composeWithDevTools(applyMiddleware(...middlewares))
);
    
store.subscribe(() => {
    console.log(store.getState())
})

export default store