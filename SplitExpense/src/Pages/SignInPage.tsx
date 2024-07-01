import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import { useState } from "react";

function SignInPage(){

    const [email,setEmail] = useState<string>("");
    const [password,setPassword]=useState<string>("");
    const [remember,setRemember] = useState<boolean>(false);

    const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleRemember = (event:React.MouseEvent<HTMLElement>) => {
        setRemember(!remember);
        console.log(remember);
    }

    const handleSignIn = (event:React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        console.log(event)
        alert("Hey");
    }
    return (
        <Container component='div' maxWidth="xs">
            <Box 
            sx={{
                marginTop:8,
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}
            >
                <Avatar
                    sx={{
                        m:1,
                        bgcolor:'primary.main'
                    }}
                >
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography>Sign in</Typography>
                <Box 
                    sx={{ mt:1}}
                >
                    <TextField
                        margin="normal"
                        id="email"
                        label="Email Address"
                        name="email"
                        type="text"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField
                        margin="normal"
                        value={password}
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        onChange={handlePasswordChange}
                        autoComplete="current-password"
                        fullWidth
                        required
                    />
                    <FormControlLabel
                        control={<Checkbox value={remember} onClick={handleRemember} color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        onClick={handleSignIn}
                        color="primary"
                        variant="contained"
                        sx={{
                            mt:3,
                            mb:2
                        }}
                        fullWidth
                    >SignIn</Button>
                </Box>
                <Grid container>
                    <Grid item xs>
                        <Link to={"/forgotpassword"}>Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link to={"/signup"}>Don't have an account? Sign Up</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default SignInPage;