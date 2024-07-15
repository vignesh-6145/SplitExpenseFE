import { Box, Checkbox, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { User } from "../Contracts/Models/User";
import { Expense, dummyExpense } from "../Contracts/Models/Expense";
import DashboardTable from "../Components/DashboardTable";

/*
    Need to implement 
        1. descendingComparator
        2. getComparator
        3. stableSort

*/


function DashboardPage(){
    return (
        <Box   
            padding={3}
        >
            <Typography variant="h6">Recent Expenses</Typography>
            <DashboardTable></DashboardTable>

        </Box>
    )
}

export default DashboardPage;