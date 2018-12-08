// eslint-disable-next-line
import { combineReducers } from 'redux';
import { SET_TOKEN, SET_PROFILE } from '../actions/actions';


function jwt_token(state = '', action) {
    switch(action.type) {
        case SET_TOKEN:
            return action.token;
        default:
            return state;
    }
}

function profile(state = [], action) {
    switch(action.type) {
        case SET_PROFILE:
            return action.profile;
        default:
            return state;
    }
}

const borderless_reducers = combineReducers({
    jwt_token,
    profile
})
export default borderless_reducers;