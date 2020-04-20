import {combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import fechContactReducer from './fechContactReducer';
const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    fechContactReducer
    })

export default rootReducer;