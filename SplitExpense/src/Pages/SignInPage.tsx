import { UseSelector, useSelector } from "react-redux";
import { AuthState, CrrUserState } from "../Contracts/Types";
import Signin from "../Components/Signin";
import CircularLoading from "../Components/CircularLoading";
import Notice from "../Components/Notice";

function SignInPage(){
    const userState:CrrUserState = useSelector(state => state.crrUser);
    
    if(Boolean(userState.user)){
       return( <Notice Message="Please wait you will be visit your Dashboard"/>);
    }
    if(userState.loading){
        return (
            <CircularLoading/>
        )
    }else{
        return (<Signin/>)
    }
    
}

// export default connect(mapStateToProps,mapDispatchtoProps)(SignInPage);
export default SignInPage;