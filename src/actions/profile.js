import axios from 'axios'
import { setAlert} from './alert';
import {
    CLEAR_PROFILE,
    DELETE_ACCOUNT,
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    

} from './types'

// GET CURRENT PROFILE

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({type: CLEAR_PROFILE});
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// GET ALL PROFILES
export const getProfiles = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// GET PROFILE BY ID
export const getProfileById = (userId) => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}




// CREATE PROFILE
export const createProfile = (formData, history, edit = false) => async dispatch => {
 try {
     
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const res = await axios.post('/api/profile', formData, config);
    dispatch({
        type: GET_PROFILE,
        payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if(!edit){
        history.push('/dashboard');
    }

 } catch (err) {
    const errors = err.response.data.errors;
 
    if (errors) {
      errors.forEach( error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
        type: PROFILE_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status}
    });

    
 }
} 

// ADD EXP

export const addExperience = ( formData, history ) => async dispatch =>{
    try {
     
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
    
        const res = await axios.put('/api/profile/experience', formData, config);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
    
        dispatch(setAlert('Experience Added', 'success'));
    
        history.push('/dashboard');
    
     } catch (err) {
        const errors = err.response.data.errors;
     
        if (errors) {
          errors.forEach( error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    
}
}

// ADD EDU

export const addEducation = ( formData, history ) => async dispatch =>{
    try {
     
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
    
        const res = await axios.put('/api/profile/education', formData, config);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
    
        dispatch(setAlert('Education Added', 'success'));
    
        history.push('/dashboard');
    
     } catch (err) {
        const errors = err.response.data.errors;
     
        if (errors) {
          errors.forEach( error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    
        }
    }

// DELETE EXP

export const deleteExperience = (id) => async dispatch =>{
    try {
        const res = await axios.delete(`/api/profile/experience/${id}`)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Removed', 'Success'));
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
       
    }
}

// DELETE EXP

export const deleteEducation = (id) => async dispatch =>{
    try {
        const res = await axios.delete(`/api/profile/education/${id}`)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Education Removed', 'Success'));
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
       
    }
}

// DELETE ACCOUNT AND PROFILE
export const deleteAccount = () => async dispatch =>{
    if(window.confirm('Are you sure? You cannot recover this account!')){
    try {
         await axios.delete(`/api/profile`)
        dispatch({
            type: CLEAR_PROFILE,
        });
        dispatch({
            type: DELETE_ACCOUNT,
            
        });
        dispatch(setAlert('Your account has been permentantly deleted', 'danger'));
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });  
        }
    }
}



