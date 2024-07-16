import { Box, Typography } from "@mui/material";

interface NoticeProps{
    Message:string
}

function Notice(props:NoticeProps){
   return (<Box
        sx={{
            margin:'auto',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}
    >
        <Typography variant="subtitle1">{props.Message}</Typography>
        
    </Box>)
}

export default Notice;