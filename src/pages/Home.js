import React, { useState } from 'react';
import '../styles/home.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Logo from "../images/logo.png"

const Home = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggler = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md">
            <NavbarBrand href="#">
                <img src={Logo} alt="oops error"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggler}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">some</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">hello</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">what</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">oops</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">fast</NavLink>
                    </NavItem>
                </Nav>
                <button type="button" className="btn btn-warning">Sign in</button>
            </Collapse>
        </Navbar>
    );
};

export default Home;