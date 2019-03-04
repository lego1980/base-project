import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink as RRNavLink } from 'react-router-dom'; //how to use reactstrap navbar with react-router-dom - https://github.com/reactstrap/reactstrap/issues/1285

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavbarCompoment extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand exact tag={RRNavLink} to="/" >reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/login/" activeClassName="active">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/signup/" activeClassName="active">Sign Up</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                    <NavLink exact tag={RRNavLink} to="/account/" activeClassName="active">Account</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink exact tag={RRNavLink} to="/contact/" activeClassName="active">Contact Us</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink exact tag={RRNavLink} to="/about/" activeClassName="active">About Us</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink exact tag={RRNavLink} to="/login/" activeClassName="active">Log In</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink exact tag={RRNavLink} to="/signup/" activeClassName="active">Sign Up</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}