import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthCookie } from "./Auth";
import {
    Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox,
    Grid, Box, Typography, createTheme, ThemeProvider, Paper
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Reset any previous errors
        setEmailError(false);
        setPasswordError(false);

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError(true);
            return;
        }

        // Validate password length
        if (password.length < 6) {
            setPasswordError(true);
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/loginRoute/loginOne", {
                email,
                password
            });

            const respData = response.data;
            if(respData.token){
                localStorage.setItem('token',respData.token)
                localStorage.setItem('isLoggedIn',true)
            }
            console.log(respData)
            setAuthCookie(respData.token);
            navigate("/dashboard");
            toast.success("Login successful");
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Invalid user or unauthorized");
        }
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <ToastContainer />
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(src/assets/SigIn-Wallpaper.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? "Please enter a valid email address" : ""}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={passwordError}
                                helperText={passwordError ? "Password must be at least 6 characters long" : ""}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signUp" variant="body2">
                                        For New Account, Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                {'Copyright © '}
                <Link color="inherit" href="www.shriramsoftwares.com">
                    Shriram Solutions
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </ThemeProvider>
    );
}

export default Login;
