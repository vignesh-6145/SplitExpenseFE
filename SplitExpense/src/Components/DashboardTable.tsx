import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { Expense, dummyExpense } from "../Contracts/Models/Expense";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getExpensesApi } from "../network/Expenses/expenseapi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  interface HeadCell<T>{
    //diablePadding:boolean,
    id:keyof T,
    label:string,
    numeric:boolean
}
  const expenseHeadCells: HeadCell<Expense>[] =[
    {
        id:'name',
        numeric:false,
        label:'name'
    },
    {
        id:'amount',
        numeric:true,
        label:'Amount (Rs)'
    },
    {
        id:'doc',
        numeric:false,
        label:'Created on'
    },
    {
        id:'settled',
        numeric:false,
        label:'settled'
    },
]

export default function DashboardTable(){
    const [data,setData] = useState<Expense[]>([]);
    const token = useSelector( state => state.auth.token);
    const userId = useSelector(state => state.crrUser.user.userId);
    
    useEffect(
       () => {
        getExpensesApi(userId,token)
       .then( resp => {
            const data = resp.data;
            const expenses: Expense[] = data.map((expense) => ({
                id: expense.expenseId,
                name: expense.name,
                doc: expense.doc, // Assuming doc is a string in YYYY-MM-DD format
                amount: expense.amount,
                userId: expense.userId,
                settled: false // Assuming settled is initially false
            }));
            setData(expenses);
        })
       .catch(err => console.log(err))
    }
    ,[]);
    console.log("-------------------------"+data);

    return(
        <Box>
            <TableContainer 
            sx={{
                width:'90%',
                margin:'auto'
            }}
            >
            <Table sx={{
                minWidth:'50%',
                borderRadius:'90%'
                }}>
                <TableHead>
                    <TableRow>
                        {
                            expenseHeadCells.map((headCell) => (
                                <StyledTableCell key={headCell.label} align='center'>{headCell.label}</StyledTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                        {data.length!=0 && data.map((row)=>(
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.amount}</StyledTableCell>
                                <StyledTableCell align="left">{row.doc}</StyledTableCell>
                                <StyledTableCell align="left">{row.settled?"Paid":"Pending"}</StyledTableCell>
                            </StyledTableRow>  
                        ))}
                        
                        {data.length == 0 && (
                            <StyledTableRow>
                                
                                <StyledTableCell colSpan={4} align="center"><Typography variant="subtitle2">There are now expesnes found</Typography></StyledTableCell>
                            </StyledTableRow>
                        )}
                </TableBody>
            </Table>
        </TableContainer>
        </Box>
        
    )
}