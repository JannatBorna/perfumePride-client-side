import React from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/others/signup.png'
import useAuth from '../../../hooks/useAuth';
import './Register.css'
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';



const Register = () => {
    const [loginData, setLoginData] = useState({});


    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        //console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password didn't match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation />
        <Container>
            <Grid container spacing={2} >
                <Grid item sx={{ mt: 8 }} xs={12} md={6} className="input-login">

                    <Typography variant="body1" gutterBottom>Register</Typography>

                    {
                        !isLoading &&

                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard" />



                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Retype Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard" />


                            <Button className="login-button" sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">All Ready Register? please login</Button>
                            </NavLink>

                        </form>
                    }

                    

                    {/* loading */}
                    {
                        isLoading && <CircularProgress color="secondary" />
                    }

                    {/* register  successfully*/}
                    {
                        user?.email && <Alert severity="success">Account Created successfully!</Alert>
                    }

                    {/* error message */}

                    {
                        authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {authError}
                        </Alert>
                    }


                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
        <Footer />
    </div>

    );
};

export default Register;

