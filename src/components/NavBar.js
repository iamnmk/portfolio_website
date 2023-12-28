import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//you can put your logo instead of nmk.

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scolled, seScrolled] = useState(false);

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
    
    return (
        <Navbar expand="lg" className= {scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">NMK </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span classNamae="navbar-toggler-icon"></span>

            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink}>Home</Nav.Link>
                <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink}>Link</Nav.Link>
                <Nav.Link href="#services"className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink}>Link</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href = '#'><img src={} alt="" /></a>
                    <a href = '#'><img src={} alt="" /></a>
                    <a href = '#'><img src={} alt="" /></a>
                
                
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect!</span> </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );


}



