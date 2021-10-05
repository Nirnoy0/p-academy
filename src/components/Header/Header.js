import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
       
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/Home">P-Academy</Navbar.Brand>
                        <Nav className="justify-content-end gap-5 nav-details">
                            <NavLink className="nav" to="/home" activeStyle={{fontWeight: "bold", color: "red"}}>
                                Home
                            </NavLink>
                            <NavLink className="nav" to="/about" activeStyle={{fontWeight: "bold",color: "red"}}>
                                About
                            </NavLink>
                            <NavLink className="nav" to="/services" activeStyle={{fontWeight: "bold",color: "red"}}>
                                Services
                            </NavLink>
                            <NavLink className="nav" to="/contact" activeStyle={{fontWeight: "bold",color: "red"}}>
                                Contact
                            </NavLink>
                        </Nav>
                </Container>
            </Navbar>
            
    );
};

export default Header;