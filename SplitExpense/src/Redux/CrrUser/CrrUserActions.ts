
import { User } from "../../Contracts/Models/User"
import { Action } from "../../Contracts/Types"
import { authenticateUserApi } from "../../network/User/user"
import { signinUser } from "../Auth/AuthActions"
import { AUTHENTICATE_USER_REQUEST, FETCH_USERS_SUCCESS, REMOVE_CRR_USER } from "./CrrUserTypes"
import { Password } from "@mui/icons-material"

export const fetchUsersRequest = ():Action => {
    return{
        type: AUTHENTICATE_USER_REQUEST,
        payload: {},
        description: 'makes a authentication request with the given credentials'
    }
}

export const fetchUserSuccess = (user:User):Action => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: user,
        description:'Sets the authenticated user information to the state'
    }
}

export const fetuserFailur = (error:string):Action => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload:error,
        description: 'stores the error message when Request fails'
    }
}

export const removeCurrentUser = ():Action =>{
    return{
        type:REMOVE_CRR_USER,
        payload:{},
        description:'Used to remove the current user after signing-out'
    }
}

export const authenticateUser = (email:string,password:string) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        authenticateUserApi(email,password)
        .then(response => {
            const user = response.data
            dispatch(fetchUserSuccess(user))
            dispatch(signinUser(email,password))
        }).catch(error => {
            const errorMsg = error.message;
            console.log(error);
            dispatch(fetuserFailur(errorMsg))
        })
    }
}
