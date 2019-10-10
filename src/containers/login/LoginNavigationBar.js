import {Navbar, Nav} from "react-bootstrap";
import React from "react";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";

export default function LoginNavigationBar() {
    return (
    <Navbar className="justify-content-end" fixed={"top"} bg="light">
        <Navbar.Brand href="/">BlueSky</Navbar.Brand>
        <Nav>
            <NavLink><Link to={'/more'}> Learn More</Link></NavLink>
            <NavLink>Our Collaborators</NavLink>
            <NavLink>Our Team</NavLink>
        </Nav>
    </Navbar>
    );
}