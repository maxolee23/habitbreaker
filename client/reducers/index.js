import {combineReducers} from 'redux';

//import reducers here
import authReducer from './auth';
import habitReducer from './habits';



const reducers = combineReducers({
    authReducer, habitReducer
});

export default reducers;