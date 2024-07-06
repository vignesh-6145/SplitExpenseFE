import { Box, CircularProgress } from "@mui/material"
import Notice from "./Notice"

function CircularLoading() {
  return (
    <Box
        sx={{
            marginTop:20,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}
    >
        <Notice Message="Please Wait"></Notice>
        <CircularProgress
            sx={{
                m:5
            }}
        />
    </Box>
  )
}

export default CircularLoading