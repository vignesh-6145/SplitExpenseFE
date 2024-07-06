import { Token } from "@mui/icons-material"
import { Action, AuthState } from "../../Contracts/Types"
import { SIGIN_USER, SIGNOUT_USER } from "./AuthTypes"

const initialAuthState:AuthState = {
    isSignedIn : false,
    token:''
}

export const authReducer = (prevState:AuthState = initialAuthState,action:Action) => {
    switch(action.type){
        case SIGIN_USER : {
            return {
                isSignedIn : true,
                token:action.payload.basicToken
            }
        }
        case SIGNOUT_USER : return {
            token:'',
            isSignedIn : false
        }

        default : return prevState
    }
}