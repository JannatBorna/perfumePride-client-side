import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="header" sticky="top">
            <Container >
                <Navbar.Brand as={HashLink} to="#home" >
                    <span className="website-name"><i className="fab fa-pinterest-p"></i>erfume Pride</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" header-text" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto my-3">
                        <Nav.Link as={HashLink} to="/home#home" className=" header-text">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/about#about" className=" header-text">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/banner#banner" className=" header-text">Banner</Nav.Link>
                        <Nav.Link as={HashLink} to="/products#products" className=" header-text">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore#explore" className=" header-text">Explore</Nav.Link>
                        <Nav.Link as={HashLink} to="/reviews#reviews" className=" header-text">Reviews</Nav.Link>
                    </Nav>

                    <Nav.Link as={HashLink} to="/dashboard#dashboard" className=" header-text">Dashboard</Nav.Link>

                    <Nav.Link as={HashLink} to="/login" className="header-text mx-3">Login
                    </Nav.Link>


                    <Button 
                        className="btn-logout mx-2" variant="secondary">Logout
                    </Button>
 
 
 
 {/* 
                    {
                        user?.email ?

                            <NavDropdown className="text" title="Signed in as:" id="basic-nav-dropdown">
                                <a className="text-danger" href="#login">{user?.displayName}</a>

                                <Nav.Link as={HashLink} to="/myOrder#myOrder">My Order</Nav.Link>
                                <Nav.Link as={HashLink} to="/manageAllOrder#manageAllOrder">Manage ALL Order</Nav.Link>
                                <Nav.Link as={HashLink} to="/addService#addService">Add New Service</Nav.Link>
                                <NavDropdown.Divider />

                                <Button onClick={logOut}
                                    className="btn-logout mx-2" variant="secondary">Logout
                                </Button>
                            </NavDropdown>

                            :


                            <Nav.Link as={HashLink} to="/login" className="header-text mx-3">Login
                            </Nav.Link>
                    } */}

                </Navbar.Collapse>


            </Container>
        </Navbar>
    );
};

export default Navigation;