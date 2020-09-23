import { createStore, applyMiddleware } from 'redux';
import appReducers from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [promiseMiddleware]

const store = createStore(
    appReducers, 
    composeWithDevTools(applyMiddleware(...middlewares))
);
    
store.subscribe(() => {
    console.log('state updated')
    console.log(store.getState())
})

export default store