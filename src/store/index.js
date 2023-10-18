import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const middleware = [thunk] // Esto permite hacer todo lo que hace el Thunk

const composeEnhancers = composeWithDevTools(
    applyMiddleware(...middleware) //Los tres puntos sacan los datos de una lista y los pone como parametros
)

const store = createStore(
    allReducers,
    composeEnhancers
)

export default store;


