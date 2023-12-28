import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/img/nmklogo4(1).svg'
import navIcon1 from '../Assets/img/nav-icon1.svg'
import navIcon2 from '../Assets/img/hashnode.svg'
import navIcon3 from '../Assets/img/icons8-github.svg'
//import NavDropdown from 'react-bootstrap/NavDropdown';
//you can put your logo instead of nmk.

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect (()=>{
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink= (value) => {
        setActiveLink(value);


    }
    
    return (
        <Navbar expand="lg" className= {scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
            <img src = {logo} alt = "Logo"/> </Navbar.Brand> 

            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span classNamae="navbar-toggler-icon"></span>

            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#Services"className={activeLink === 'Services' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('Services')}>Services</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href = 'https://github.com/iamnmk'><img src={navIcon1} alt="" /></a>
                    <a href = 'https://nmk.hashnode.dev/'><img src={navIcon2} alt="" /></a>
                    <a href = 'https://github.com/iamnmk'><img src={navIcon3} alt="" /></a>
                
                
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect!</span> </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );


}



