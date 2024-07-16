import { Box, Button, Checkbox, FormControlLabel, Input, TextField } from "@mui/material"
import { useState } from "react";
import { Expense } from "../Contracts/Models/Expense";
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { addExpenseApi } from "../network/Expenses/expenseapi";
import { Message } from "@mui/icons-material";
import CircularLoading from "./CircularLoading";
import Notice from "./Notice";

function AddExpense(){
    const userId = useSelector(state => state.crrUser.user.userId);
    const token = useSelector( state => state.auth.token);

    const [expenseEntry,setExpenseEntry] = useState({
        name:'',
        amount:null,
        settled:false,
        userId: userId,
        doc:dayjs().format("YYYY-MM-DD").toString()
    });
    const [response,setResponse] = useState({code:null,message:null});

    const handleAddExpense=()=>{
        
        addExpenseApi(expenseEntry,token)
        .then(response => {
            setResponse({
                code:response.status,
                message:response.data
            });
        })
        .catch(err => console.log(err))
    }
    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setExpenseEntry({...expenseEntry,name:event.target.value});
    }
    const handleAmountChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setExpenseEntry({...expenseEntry,amount:parseFloat(event.target.value)})
    }
    const handleSettledCHange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setExpenseEntry({...expenseEntry,settled:event.target.checked});
    }
    const handleDocChange = (value:any) =>{
        setExpenseEntry({...expenseEntry,doc:value.format('YYYY-MM-DD').toString()});
    }
    console.log(expenseEntry);
   if(response.code===200){
       return( <Notice Message={`We have recorded your expense please referesh the page\nexpense id - ${response.message}`}/>);
    }else if(response.code!=null && response.code!==200){
       return( <Notice Message="Something went wrong"/>);
    }else{
        return (
            <Box>
                <TextField
                    margin="normal"
                    variant="standard"
                    label="name"
                    type="text"
                    value={expenseEntry.name}
                    required
                    onChange={handleNameChange}
                    sx={{
                        padding:1,
                        xs:{
                            width:'100%'
                        },
                        md:{
                            width:'50%'
                        }
                    }}
                />
                <TextField
                    margin="normal"
                    variant="standard"
                    label="amount"
                    type="number"
                    sx={{
                        xs:{
                            width:'100%'
                        },
                        md:{
                            width:'50%'
                        },
                        padding:1,
                    }}
                    value={expenseEntry.amount}
                    required
                    onChange={handleAmountChange}
                />
                <FormControlLabel 
                    label="Settled" 
                    onClick={handleSettledCHange}
                    value={expenseEntry.settled}
                    sx={{
                        padding:1,
                        display:{
                            xs:{
                                width:'50%',
                            },
                            md:{
                                width:'100%'
                            }
                        }
                    }}
                    control={<Checkbox  size="large"/>}></FormControlLabel>
                <LocalizationProvider 
                dateAdapter={AdapterDayjs}>
                    <DateField
                    value={dayjs(expenseEntry.doc)}
                        sx={{
                            padding:1,
                            display:{
                                xs:{
                                    width:'50%'
                                },
                                md:{
                                    width:'100%'
                                }
                            }
                        }}
                        label="Expenditure Date"
                        format="YYYY-MM-DD"
                        onChange={handleDocChange}
                    ></DateField>
                </LocalizationProvider>
                <Button 
                    variant="contained"
                    onClick={handleAddExpense}
                    fullWidth>Add Expense</Button>
            </Box>
        )
    }
}

export default AddExpense;