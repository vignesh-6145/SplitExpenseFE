import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { signOutUser, signinUser } from "../Redux/Auth/AuthActions";
import { connect, useSelector, useDispatch } from "react-redux";
import { Email } from "@mui/icons-material";
import { removeCurrentUser } from "../Redux/CrrUser/CrrUserActions";
import MenuOptionItem from "../Contracts/MenuIOptionItem";
import { Link } from "react-router-dom";



// const mapStateToProps = state => {
//     return {
//         isSignedIn : state.isSignedIn
//     }
// }
// const mapDispatchtoProps = dispatch => {
//     return{
//         signIn : (email:string,password:string)=> dispatch(signinUser(email,password)),
//         signOut : (email:string) => dispatch(signOutUser(email))
//     }
// }

const pages:MenuOptionItem[] = [{label:"Home",action:null,isLoginRequired:false},{label:"About",action:null,isLoginRequired:false},{label:"Premium",action:null,isLoginRequired:false},{label:"dashboard",action:null,isLoginRequired:true}];
const settings = [{label:"Profile",action:null},{label:"Account",action:null},{label:"Dashboard",action:null},{label:"Logout",action:null}];


function Appbar(){
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const dispatch = useDispatch()

    const [anchorElNav,setAnchorElNav] = useState<null|HTMLElement>(null);
    const [anchorElUser,setAnchorElUser] = useState<null|HTMLElement>(null);

    const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);//need to update it to users email
        dispatch(signOutUser());
        dispatch(removeCurrentUser());
    };

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
                                        component={Link} 
                                        to={`/${page.label}`}
                                        key={page.label}
                                        onClick={handleCloseNavMenu}
                                        >
                                            <Typography
                                                textAlign="center"
                                            >{page.label}</Typography>
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
                        {pages.filter((page)=> !page.isLoginRequired || page.isLoginRequired==isSignedIn).map((page)=>(
                            <Button
                                key={page.label}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my:2,
                                    color:'white',
                                    display:'block'
                                }}
                            ><Link to={page.label} style={{ color: 'inherit', textDecoration: 'inherit'}}>{page.label}</Link></Button>
                        ))}
                    </Box>
                    {isSignedIn && 
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
                                key={setting.label}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center">{setting.label}</Typography>
                            </MenuItem>
                        ))}    
                        </Menu>
                    </Box>}
                    {!isSignedIn && <Link to="signin" style={{ color: 'inherit', textDecoration: 'inherit'}}>Signin/Signup</Link>}
                </Toolbar>
                
            </Container>
        </AppBar>
    )
}

// export default connect(mapStateToProps,mapDispatchtoProps)(Appbar);
export default Appbar