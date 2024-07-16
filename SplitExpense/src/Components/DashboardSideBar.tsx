import { Divider, Stack } from "@mui/material";
import AddExpense from "./AddExpense";

function DashboardSideBar(){
    return (
        <Stack
            sx={{
                height:'100%'
            }}
        >
            <AddExpense></AddExpense>
            <Divider 
                orientation="horizontal" flexItem></Divider>
            
        </Stack>
    )
}

export default DashboardSideBar;