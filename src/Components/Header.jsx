import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<>
<Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                    <i className="fa-regular fa-address-book" style={{color: "#98b1fb",}} />{' '}
                        <span> Contact Viewer </span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
</ >
  )
}

export default Header
