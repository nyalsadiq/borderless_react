
/*
 * action types 
 */
export const SET_TOKEN = 'SET_TOKEN';

/*
 * action creators
 */
export function set_token(token) {
    return { type: SET_TOKEN, token }
}
