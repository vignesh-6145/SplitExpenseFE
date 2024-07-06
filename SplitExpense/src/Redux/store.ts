import {createStore,applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import crruserReducer from './CrrUser/CrrUserReducer';
import { authReducer } from './Auth/AuthReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    crrUser : crruserReducer,
    auth : authReducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
store.subscribe(()=>console.log(store.getState()));
export default store;