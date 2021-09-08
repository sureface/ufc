import React, {useEffect, useState} from 'react';
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

     const [changeNav, setChangeNav] = useState(false);
     const [isOpen, setIsOpen] = useState(false);

     const [audio] = useState(new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'));
     const [playing, setPlaying] = useState(true);

     //https://mp3hub.best/download/vic-sage-feat-mike-stud-college.mp3
     //https://muzoff.net/uploads/files/2018-06/1527848533_eminem-my-name-is.mp3
     //https://cdn1.sefon.pro/prev/Rv5XIkIIJlKyiYhKa2fZzg/1631125516/175/NEFFEX%20-%20Never%20Give%20Up%20%28192kbps%29.mp3
     //https://cdn1.sefon.pro/prev/6gI2V6e7l8q3KYWvBxzJAw/1631125392/95/Eminem%20-%20River%20%28192kbps%29.mp3
     //https://static.muzlo.cc/download/36590/NEFFEX_-_Till-l-Collapse.mp3
     //https://static.muzlo.cc/download/40371/NEFFEX_-_Fight-Back.mp3

     useEffect(() => {
         playing ? audio.play() : audio.pause();
         audio.addEventListener('ended', () => audio.play());

     }, [playing]);

     const startPlay = () => {
         setPlaying(!playing);
         console.log(playing);
     }

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
                     <button type="button" className="btn btn-danger" onClick={startPlay}>music</button>
                 </Collapse>
             </Navbar>
         </div>
     );
 };

 export default NavigationBar;