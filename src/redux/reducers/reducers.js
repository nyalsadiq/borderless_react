// eslint-disable-next-line
import { combineReducers } from 'redux';
import { SET_TOKEN } from '../actions/actions';


function jtw_token(state = '', action) {
    switch(action.type) {
        case SET_TOKEN:
            return action.token;
        default:
            return state;
    }
}

export default jtw_token;