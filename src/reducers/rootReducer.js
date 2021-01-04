
import langageReducer from './langageReducer';


import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    langage: langageReducer,
})

export default rootReducer