import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  const [hoverIndicatorStyle, setHoverIndicatorStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
    opacity: 0,
  });
  const [activeLink, setActiveLink] = useState(null);
  const navRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = e.target.getBoundingClientRect();
      setHoverIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        top: linkRect.top - navRect.top + (linkRect.height - hoverIndicatorStyle.height) / 2, /* Adjust top for vertical centering */
        height: linkRect.height,
        opacity: 1,
      });
      setActiveLink(e.target.getAttribute('href'));
    }
  };

  const handleMouseLeave = () => {
    setHoverIndicatorStyle((prevStyle) => ({
      ...prevStyle,
      opacity: 0,
    }));
    setActiveLink(null);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar expand="lg" className="wellifize-navbar">
      <Container>
        <Navbar.Brand href="#home" className="wellifize-logo">ROYAL ELECTRICALS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" ref={navRef}>
            <div
              className="hover-indicator"
              style={{
                left: hoverIndicatorStyle.left,
                width: hoverIndicatorStyle.width,
                top: hoverIndicatorStyle.top,
                height: hoverIndicatorStyle.height,
                opacity: hoverIndicatorStyle.opacity,
              }}
            ></div>
            <Nav.Link
              href="#home"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleLinkClick(e, 'home')}
              className={activeLink === '#home' ? 'hovered' : ''}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#about"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleLinkClick(e, 'about')}
              className={activeLink === '#about' ? 'hovered' : ''}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#services"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleLinkClick(e, 'services')}
              className={activeLink === '#services' ? 'hovered' : ''}
            >
              OUR SERVICES
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleLinkClick(e, 'projects')}
              className={activeLink === '#projects' ? 'hovered' : ''}
            >
              OUR PROJECTS
            </Nav.Link>
            <Nav.Link
              href="#companyinfo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleLinkClick(e, 'companyinfo')}
              className={activeLink === '#companyinfo' ? 'hovered' : ''}
            >
              COMPANY INFO
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={activeLink === '#contact' ? 'hovered' : ''}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
