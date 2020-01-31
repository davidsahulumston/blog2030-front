import {combineReducers} from 'redux';
import blogs from './postReducer';

export default combineReducers({
    blogs: blogs
})