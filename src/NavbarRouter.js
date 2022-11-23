import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavbarRouter = () => {

    const home = {
        name: 'Home',
        path: '/',
    };

    const linkItem = [
        {
            name: 'UseState',
            path: '/useState',
        },
        {
            name: 'Fetch',
            path: '/fetch',
        },
        {
            name: 'PracticeContext',
            path: '/practiceContext',
        },
        {
            name: 'ReactQuery',
            path: '/reactQuery',
        },
        {
            name: 'Form',
            path: '/form',
        }
    ];

    return (
        <nav>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href={home.path}> {home.name} </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="ssss"> Page not exist </Nav.Link>
                            <NavDropdown title="Functions" id="basic-nav-dropdown">
                                {linkItem.map(val => <NavDropdown.Item href={val.path} key={val.path}> {val.name} </NavDropdown.Item>)}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav >
    );
};