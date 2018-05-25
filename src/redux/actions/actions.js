
/*
 * action types 
 */
export const SET_TOKEN = 'SET_TOKEN';
export const SET_PROFILE = 'SET_PROFILE';
/*
 * action creators
 */
export function set_token(token) {
    return { type: SET_TOKEN, token }
}

export function set_profile(profile) {
    return { type: SET_PROFILE, profile}
}
