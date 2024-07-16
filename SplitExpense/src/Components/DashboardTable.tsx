import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { Expense, dummyExpense } from "../Contracts/Models/Expense";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getExpensesApi } from "../network/Expenses/expenseapi";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

interface HeadCell<T>{
    //diablePadding:boolean,
    id:keyof T,
    label:string,
    numeric:boolean
}



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
    const [page,setPage] = useState<number>(0);
    const [rowsPerPage,setRowsPerPage] = useState<number>(5);
    
    useEffect(
       () => {
        getExpensesApi(userId,token)
       .then( resp => {
            const respData = resp.data;
            const expenses: Expense[] = respData.map((expense) => ({
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

    const handleChangePage = (
        event:React.MouseEvent<HTMLButtonElement> | null,
        newPage:number,
    ) =>{
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    }
    return(
        <Box>
            <TableContainer 
            sx={{
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
                                <StyledTableCell key={headCell.label} align='center'>
                                    <Typography variant="button">{headCell.label}</Typography>
                                </StyledTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                        {data.length!=0 && data.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row)=>(
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="center">
                                    <Typography variant="body1">{row.name}</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">                                
                                    <Typography variant="body1">{row.amount}</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">                                
                                    <Typography variant="body1">{row.doc}</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">                                
                                    <Typography variant="body1">{row.settled?"Paid":"Pending"}</Typography>
                                </StyledTableCell>
                            </StyledTableRow>  
                        ))}
                        
                        {data.length == 0 && (
                            <StyledTableRow>
                                
                                <StyledTableCell colSpan={4} align="center"><Typography variant="subtitle2">There are now expesnes found</Typography></StyledTableCell>
                            </StyledTableRow>
                        )}
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[1,5,10,25,{label:'All',value:-1}]}
                        colSpan={4}
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        slotProps={{
                            select:{
                                native:true
                            }
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    >

                    </TablePagination>
                </TableRow>
            </TableFooter>
            </Table>
            
        </TableContainer>
        </Box>
        
    )
}

//Add a new page to record a expense