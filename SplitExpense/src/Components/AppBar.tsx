import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

const pages:string[] = ["Home","About","Premium"];
const settings:string[] = ["Profile","Account","Dashboard","Logout"];

function Appbar(){
    const [anchorElNav,setAnchorElNav] = useState<null|HTMLElement>(null);
    const [anchorElUser,setAnchorElUser] = useState<null|HTMLElement>(null);

    const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                 disableGutters>
                    <AdbIcon sx={{
                        display:{
                            xs:'none',
                            md:'flex'
                        },
                        mr:1
                    }}/>
                    <Typography
                        variant="h6"
                        noWrap 
                        sx={{
                            mr:2,
                            display:{
                                xs:'none',
                                md:'flex'
                            },
                            fontFamily:'monospace',
                            fontWeight:700,
                            letterSpacing:'.1rem',
                            color:'inherit',
                            textDecoration:'none'
                        }}                 
                    >
                        SplitExpense
                    </Typography>
                    <Box sx={{
                        flexGrow:1,
                        display:{
                            xs:'flex',
                            md:'none'
                        }
                    }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical:'bottom',
                                horizontal:'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical:'top',
                                horizontal:'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                xs:'block',
                                md:'none'
                            }}
                        >
                            {
                                pages.map(page => (
                                    <MenuItem 
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        >
                                            <Typography
                                                textAlign="center"
                                            >{page}</Typography>
                                        </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                    <AdbIcon sx={{
                        display:{
                            xs:'flex',
                            md:'none'
                        },
                        mr:1
                    }}/>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr:2,
                            display:{
                                xs:'flex',
                                md:'none'
                            },
                            flexGrow:1,
                            fontFamily:'monospace',
                            fontWeight:700,
                            color:'inherit',
                            letterSpacing:'.2rem'
                        }}
                    >Splitexpense</Typography>
                    <Box
                        sx={{
                            flexGrow:1,
                            display:{
                                xs:'none',
                                md:'flex'
                            }
                        }}
                    >
                        {pages.map((page)=>(
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my:2,
                                    color:'white',
                                    display:'block'
                                }}
                            >{page}</Button>
                        ))}
                    </Box>
                    <Box sx={{flexGrow:0}}>
                        <Tooltip title="open Settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{p:0}}
                            >
                                <Avatar></Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt:'45px'}}
                            id="menu-app"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical:'top',
                                horizontal:'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical:'top',
                                horizontal:'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        {settings.map(setting => (
                            <MenuItem 
                                key={setting}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center">{setting}</Typography></MenuItem>
                        ))}    
                        </Menu>
                    </Box>
                </Toolbar>
                
            </Container>
        </AppBar>
    )
}

export default Appbar;