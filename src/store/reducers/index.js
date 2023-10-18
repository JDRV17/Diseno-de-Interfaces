import {combineReducers} from 'redux';
import uiReducer from './ui';

const allReducers = combineReducers({
    ui: uiReducer,
});

export default allReducers;