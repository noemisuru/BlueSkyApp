import {Navbar, Nav} from "react-bootstrap";
import React from "react";
import NavLink from "react-bootstrap/NavLink";

export default function Footer(props) {
    return (
        <div>
            <br/>
            <br/>
            <br/>
        <Navbar className="justify-content-center" fixed={"bottom"} bg="light" style={{
            bottom: '0'}}>
            <Nav>
                <NavLink>
                    © Sponsored by Deutsche Bank Sustainability Hackathon
                </NavLink>
            </Nav>
        </Navbar>
            </div>
    );
}