import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './styles.css';

const logo = require('./flag.svg') as string;

export default class Header extends React.Component {
    render () {
        return (
            <Navbar inverse={true} className="header">
                <Navbar.Brand>
                    <img id="brand-logo" src={logo} />
                    <div id="brand-title">Basic CRUD Client</div>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem>Created for OZRK Labs</NavItem>
                    </Nav>
                    <Nav pullRight={true}>
                        <NavItem> Ben Parker </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}