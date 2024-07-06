
import { Action } from "../../Contracts/Types";
import { SIGIN_USER,SIGNOUT_USER } from "./AuthTypes";

const generateBasicToken = (email:string,password:string) => `Basic ${btoa(`${email}:${password}`)}`
export const signinUser = (email:string,password:string):Action => {
    return{
        type: SIGIN_USER,
        payload:{basicToken:generateBasicToken(email,password)},
        description: 'Sets the Sign-in state when user authentication was successful'
    }
}

export const signOutUser = (): Action => {
    return{
        type: SIGNOUT_USER,
        payload:{},
        description: 'Sets the Sign-out state when user logged-out'
    }
}