import { Box, Checkbox, Stack, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { User } from "../Contracts/Models/User";
import { Expense, dummyExpense } from "../Contracts/Models/Expense";
import DashboardTable from "../Components/DashboardTable";
import DashboardSideBar from "../Components/DashboardSideBar";

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
            <Stack
                direction={"row"}
            >
                <Box sx={{
                    display:{
                        sm:'none',
                        md:'block',
                    },
                    width:'30%'
                }}>
                    <DashboardSideBar/>
                </Box>
                <Box
                    sx={{
                        width:'100%'
                    }}
                >
                    <Typography variant="h6">Recent Expenses</Typography>
                    <DashboardTable></DashboardTable>
                </Box>
            </Stack>

        </Box>
    )
}

export default DashboardPage;