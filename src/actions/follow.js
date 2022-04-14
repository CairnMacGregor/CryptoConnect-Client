import axios from 'axios'
import { setAlert} from './alert';
import {
    GET_FOLLOWERS,
    GET_FOLLOWING,
    FOLLOW_ERROR,
    UPDATE_FOLLOWERS,
    PROFILE_ERROR
} from './types'


// GET PROFILE FOLLOWERS BY ID
export const getFollowersById = (userId) => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}/followers`);

        dispatch({
            type: GET_FOLLOWERS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: FOLLOW_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// GET PROFILE FOLLOWING BY ID
export const getFollowingById = (userId) => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}/following`);

        dispatch({
            type: GET_FOLLOWING,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: FOLLOW_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}


// UNFOLLOW PROFILE BY ID
export const UnfollowById = id => async dispatch => {
    try {
        await axios.put(`/api/profile/unfollow/${id}`);
        window.location.reload();
        dispatch({
            type: UPDATE_FOLLOWERS,
        })
        
        
        dispatch(setAlert('User Unfollowed', 'success'))
    } catch (err) {
        // dispatch({
        //     type: PROFILE_ERROR,
        //     payload: {msg: err.response.statusText, status: err.response.status}
        // })
        console.log(err)
    }
}

// FOLLOW BY ID

export const FollowById = id => async dispatch =>{
    try {
        await axios.put(`/api/profile/follow/${id}`);
        window.location.reload();
        dispatch({
            type: UPDATE_FOLLOWERS,
        })
        dispatch(setAlert('User Followed', 'success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}