import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavbarComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="">Dividend Tracker</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;