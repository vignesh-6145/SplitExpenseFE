import { useSelector } from "react-redux";
import { Expense } from "../../Contracts/Models/Expense";
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
export const getExpenseApi = (expenseId:GUID, token:string) => {
    // data {email:<email>,password:<password>}
    return  axiosClient.get(`/Expense/getExpenses/${expenseId}`,
        {
            'headers':{
                'Authorization':token
            }
        }
    )
}
export const deleteExpensesApi = (expenseId:GUID, token:string) => {
    // data {email:<email>,password:<password>}
    console.log(expenseId);
    return  axiosClient.delete(`/Expense/deleteExpense/${expenseId}`,
        {
            'headers':{
                'Authorization':token
            }
        }
    )
}
export const addExpenseApi = (expense:any,token:string) => {
    // data {email:<email>,password:<password>}
    return  axiosClient.post(`/Expense/addExpense/`,expense,
        {
            'headers':{
                'Authorization':token
            }
        }
    )
}
