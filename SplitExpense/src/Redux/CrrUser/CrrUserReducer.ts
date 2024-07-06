
import { Action, CrrUserState } from "../../Contracts/Types";
import { AUTHENTICATE_USER_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, REMOVE_CRR_USER } from "./CrrUserTypes";


const initialCrrUserState:CrrUserState = {
    loading:false,
    user:null,
    error:''
}

const crruserReducer = (state:CrrUserState=initialCrrUserState, action:Action) =>{
    switch(action.type){
        case AUTHENTICATE_USER_REQUEST : return{
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS : return{
            loading:false,
            user: action.payload,
            error:''
        }

        case FETCH_USERS_FAILURE : return{
            loading:false,
            user:null,
            error: action.payload
        }
        case REMOVE_CRR_USER: return{
            loading:false,
            user:null,
            error:''
        }
        default: return state
    }
}

export default crruserReducer;