import { axiosClient } from "../apiClient";

export const authenticateUserApi = (email:string,password:string) => {
    // data {email:<email>,password:<password>}
    return  axiosClient.post('/User/Login',{
        username:email,
        password:password
    })
}