import React from 'react';
import logo from './logo.svg';
import { Navbar, Nav, Form, Button,FormControl } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="50"
                    height="30"
                    className="d-inline-block align-top"
                />
                    Zoom Class</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
       </div>
    )
}

export default NavBar;
