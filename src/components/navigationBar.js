import React, { useState } from 'react';
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
import '../styles/home.scss'

 const NavigationBar = (props) => {

    const [changeNav, setChangeNav] = useState(false)

     const [isOpen, setIsOpen] = useState(false);

     const toggler = () => setIsOpen(!isOpen);

     const changeNavigation = () => {
        if (window.scrollY >= 1000){
            setChangeNav(true)
        } else {
            setChangeNav(false)
        }
     }
     window.addEventListener('scroll', changeNavigation);

     return (
         <div className="navPage">
             <Navbar className={changeNav ? 'navigation active' : 'navigation'} expand="md">
                 <NavbarBrand href="#">
                     <img className="logo" src={Logo} alt="oops error"/>
                 </NavbarBrand>
                 <NavbarToggler onClick={toggler}/>
                 <Collapse isOpen={isOpen} navbar>
                     <Nav className="ml-auto" navbar>
                         <NavItem className="nav-item">
                             <NavLink className="nav-link" href="#">Home</NavLink>
                         </NavItem>
                         <NavItem className="nav-item">
                             <NavLink className="nav-link" href="#">some</NavLink>
                         </NavItem>
                         <NavItem className="nav-item">
                             <NavLink className="nav-link" href="#">hello</NavLink>
                         </NavItem>
                         <NavItem className="nav-item">
                             <NavLink className="nav-link" href="#">what</NavLink>
                         </NavItem>
                         <NavItem className="nav-item">
                             <NavLink className="nav-link" href="#">oops</NavLink>
                         </NavItem>
                         <NavItem className="nav-item">
                             <NavLink className="nav-link" href="#">fast</NavLink>
                         </NavItem>
                     </Nav>
                     <button type="button" className="btn btn-warning">Sign in</button>
                 </Collapse>
             </Navbar>
         </div>
     );
 };

 export default NavigationBar;