import { useTheme } from '@mui/material/styles';
import { TablePaginationProps } from "../Contracts/Types";
import { Box, IconButton } from "@mui/material";
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@mui/icons-material';


function TablePaginationActions(props:TablePaginationProps){
    const theme = useTheme();
    const {count, page, rowsPerPage, onPageChange} = props;

    const handleFirstPageButtonClick = (
        event:React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event,0);
    }

    const handleBackButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event,page-1);
    }
    const handleNextButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event,page+1);
    }
    const handleLastPageButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event,Math.max(0,Math.ceil(count/rowsPerPage)-1));
    }
    
    return(
        <Box sx={{
            flexShrink:0,
            ml:2.5
        }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page===0}
            >
                {theme.direction === 'rtl' ? <LastPage/> : <FirstPage/>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page===0}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                {theme.direction === 'rtl' ? <FirstPage/> : <LastPage/>}
            </IconButton>
        </Box>
    )
}