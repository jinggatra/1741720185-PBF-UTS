import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                <Navbar.Toggle>
                <Navbar.Brand>
                    <Link to="/">Test</Link>
                </Navbar.Brand>
                </Navbar.Toggle>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullRight>

                        <NavItem eventKey={1} componentClass={Link} to="/">
                            Home
                        </NavItem>

                        <NavItem eventKey={2} componentClass={Link} to="/about">
                            About
                        </NavItem>

                        <NavItem eventKey={3} componentClass={Link} to="/contact">
                            Contact
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}