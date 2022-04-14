import {GET_FOLLOWERS, GET_FOLLOWING, FOLLOW_ERROR, UPDATE_FOLLOWERS} from "../actions/types";

const initialState ={
    following: [],
    followers: [],
    error: {}
}

function followReducer( state = initialState, action){

    const { type, payload} = action;

    switch(type){
        case GET_FOLLOWING:
            return{
                ...state,
                following: payload,
                loading: false
            }
 
        case GET_FOLLOWERS:
            return{
                ...state,
                followers: payload,
                loading: false
            }
            case UPDATE_FOLLOWERS:
                return{
                    ...state,
                    loading: false
                }
            case FOLLOW_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false,
                    following: [],
                    followers: []
                }
                default: 
                 return state;
    }
}

export default followReducer