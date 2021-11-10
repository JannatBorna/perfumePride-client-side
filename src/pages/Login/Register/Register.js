import React from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/signup.png'
import useAuth from '../../../hooks/useAuth';
import './Register.css'



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


    );
};

export default Register;
























// import React from 'react';
// import { Form, Button, FloatingLabel, Row, Col, Container, Alert } from 'react-bootstrap';
// import { Link, useLocation, useHistory, NavLink } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../../hooks/useAuth';
// import img from '../../../images/signup.png'
// import './Register.css';
// import { useState } from 'react';


// const Register = () => {

//     const [loginData, setLoginData] = useState({})
//     const { user, registerUser, authError } = useAuth();

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         console.log(field, value);
//         const newLoginData = { ...loginData }
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }


//     const handleLoginSubmit = e => {
//         if (loginData.password !== loginData.password2) {
//             alert("Your password didn't match")
//             return
//         }
//         registerUser(loginData.email, loginData.password);
//         e.preventDefault();
//     }


//     return (
//         <div className="from my-5">
//             <h1 className="text-center fw-3 my-5"><span>Register Now</span></h1>
//             <Container>
//                 <Form onSubmit={handleLoginSubmit}>
//                     <Row>
//                         <Col lg={5} md={7} className="input-login">
//                             <div className="my-5">
//                                 <FloatingLabel
//                                     controlId="floatingInput"
//                                     label="Email address"
//                                     className="mb-3 w-75 mx-auto"
//                                 >
//                                     <Form.Control
//                                         onBlur={handleOnChange}
//                                         type="email" placeholder="name@example.com" />
//                                 </FloatingLabel>
//                                 <FloatingLabel controlId="floatingPassword" label="Password" className="w-75 mx-auto">
//                                     <Form.Control
//                                         onBlur={handleOnChange}
//                                         type="password" placeholder="Password" />
//                                 </FloatingLabel>

//                                 <div className="row mb-3 text-danger fw-5">{authError}</div>

//                                 <Button className="login-btn my-5" variant="primary" type="submit">
//                                     Log-in
//                                 </Button>

//                                 <br />
                                
//                                 <span className="fs-6 fw-6">All Ready have Account? <Link as={HashLink} to="/login">Login</Link></span><br />




                               


//                             </div>
//                         </Col>

//                         <Col lg={7} md={5}>
//                             <div>
//                                 <img className="w-75 mx-5" src={img} alt="" />
//                             </div>

//                         </Col>
//                     </Row>


//                     {/* loading */}
//                     {/* {
//                         isLoading && <CircularProgress
//                             color="secondary" />
//                     } */}

//                     {/* register  successfully*/}
//                     {
//                         user?.email && <Alert severity="success">Login successfully!</Alert>
//                     }





//                     {/* error message */}

//                     {
//                         authError && <Alert severity="error">
//                             {/* <AlertTitle>Error</AlertTitle> */}
//                             {authError}
//                         </Alert>
//                     }





//                 </Form>
//             </Container>



//         </div>
//     );
// };

// export default Register