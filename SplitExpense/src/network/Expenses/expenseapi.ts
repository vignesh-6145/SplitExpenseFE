import { GUID } from "../../Contracts/Types";
import { axiosClient } from "../apiClient";

export const getExpensesApi = (userId:GUID, token:string) => {
    // data {email:<email>,password:<password>}
    return  axiosClient.get(`/Expense/getExpenses/${userId}`,
        {
            'headers':{
                'Authorization':token
            }
        }
    )
}