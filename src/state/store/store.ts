import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from '../reducers';
import thunk from 'redux-thunk'

const store = createStore(
    appReducers, 
    compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)));

store.subscribe(() => {
    console.log('state updated')
    console.log(store.getState())
})

export default store