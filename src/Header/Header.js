import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';
import Logo from "../assets/Logo3.png";
import "./Header.css";

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Trainings</Nav.Link>
                        <Nav.Link href="#link">Testimonials</Nav.Link>
                        <Nav.Link href="#link">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;