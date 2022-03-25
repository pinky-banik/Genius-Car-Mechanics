import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
const Header = () => {
    const {user,logOut}= useAuth();
    return (
        <div>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to="/home" href="#home">Genius</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                    
                        {user.email?<Button className='mx-3' onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user.email && <Navbar.Text>
                        Signed in as <a href="#login">
                            {user?.displayName}</a>
                    </Navbar.Text>}
                        <br />
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;