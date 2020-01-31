import { FETCH_BLOGS_IMAGES, USER_VOTE } from '../actions/types';


export default function postReducer(state = [], action) {
    switch(action.type){
        case FETCH_BLOGS_IMAGES:
            return action.blogs;
        case USER_VOTE:
            return [...state, action.payload];
        default:
            return state; 
    }
}