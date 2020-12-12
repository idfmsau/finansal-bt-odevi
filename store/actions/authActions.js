import {SET_LOGGED_USER} from '../types/authTypes'

export const loginUser = (user) => {
    return (dispatch, getState) => {
        dispatch({type: SET_LOGGED_USER, payload: user})
    }
}