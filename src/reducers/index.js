
import { combineReducers } from 'redux';
import {movie} from './movie';
import {search} from './search';
import {requestStatus} from './requestStatus';
const rootReducer = combineReducers({
    movie,
    search,
    requestStatus
})

export default rootReducer;