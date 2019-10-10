import {Navbar, Nav} from "react-bootstrap";
import React from "react";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserAvatar from 'react-user-avatar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TableChartIcon from '@material-ui/icons/TableChart';
import CheckIcon from '@material-ui/icons/Check';
import BarChartIcon from '@material-ui/icons/BarChart';

export default function NavigationBar(props) {

    return (
        <div>
        <Navbar expand="sm" fixed={"top"} bg="light" >
            <Navbar.Brand href="/">BlueSky</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink><Link to={'/learnmore'}>Our Mission</Link></NavLink>
                <NavLink><Link to={'/collaborators'}>Our Collaborators</Link></NavLink>
                <NavLink><Link to={'/team'}>Our Team</Link></NavLink>
            </Nav>
            <Nav>

                <NavLink><Link to={'/submission'}>Make submission</Link></NavLink>
                <NavDropdown title={'Hi, '+props.name+'!'} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/myscores"><BarChartIcon fontSize="small"/>My Scores</NavDropdown.Item>
                    <NavDropdown.Item href="/mygoals"><CheckIcon fontSize="small"/> Goals</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/leaderboard"><TableChartIcon fontSize="small"/>See Leaderboard</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login" style={{color:'red'}}><PowerSettingsNewIcon fontSize="small"/>Logout</NavDropdown.Item>
                </NavDropdown>
                <UserAvatar size="40" name={props.name}/>
            </Nav>
        </Navbar>
        </div>
    );
}