import { GET_PROFILE,  GET_PROFILES, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_FOLLOWERS,} from "../actions/types";

const initialState ={
    profile: null,
    profiles: [],
    loading: true,
    error: {},
    followers: []
}

function profileReducer( state = initialState, action){

    const { type, payload} = action;

    switch(type){
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case GET_FOLLOWERS:
            return{
                ...state,
                followers: payload,
                loading: false
            }
            
            case GET_PROFILES:
                return{
                    ...state,
                    profiles:payload,
                    loading: false
                }
            case PROFILE_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false,
                    profile: null
                }
               
            case CLEAR_PROFILE:
                return{
                    ...state,
                    profile: null,
                    loading: false
                }   
                default: 
                return state;
    }
}

export default profileReducer