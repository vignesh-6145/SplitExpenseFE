import {  CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { Outlet } from "react-router-dom"
import Appbar from "../Components/AppBar";
function BaseLayout() {
    const theme= createTheme();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Appbar></Appbar>
        <Outlet></Outlet>
    </ThemeProvider>
    
  )
}

export default BaseLayout