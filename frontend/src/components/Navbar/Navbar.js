import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles';
import './CustomNavbar.css';

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileStyles = isMobile ? styles.navbarMobile : {};

  return (
    <Navbar collapseOnSelect bg="light" expand="lg" style={{...styles.navbar, ...mobileStyles.navbar}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={styles.navbarToggler} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={styles.navLinks}>
            <Nav.Link as={Link} to="/" style={styles.navLink}>Home</Nav.Link>
            <NavDropdown title="The Show" id="nav-dropdown-show" className="white-dropdown-toggle">
              <NavDropdown.Item as={Link} to="/show/season/1" style={styles.navDropdownItem}>Season 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/show/season/2" style={styles.navDropdownItem}>Season 2</NavDropdown.Item>
              {/* More seasons */}
            </NavDropdown>
            <NavDropdown title="Articles" id="nav-dropdown-articles" className="white-dropdown-toggle">
              <NavDropdown.Item as={Link} to="/articles/food" style={styles.navDropdownItem}>Food</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/articles/drinks" style={styles.navDropdownItem}>Drinks</NavDropdown.Item>
              {/* More categories */}
            </NavDropdown>
            <Nav.Link as={Link} to="/shop" style={styles.navLink}>Shop</Nav.Link>
            <Nav.Link as={Link} to="/about" style={styles.navLink}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand as={Link} to="/" style={styles.navbarBrand}>
          <img src="/images/PensionerPirateLogo.png" alt="Pensioner Pirate Logo" style={styles.navbarLogo} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
