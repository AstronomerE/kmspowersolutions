/** @format */

import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg='danger' variant={"light"} expand='lg'>
          <Navbar.Brand href='#' id='nav-brand'>
            <img src='../../../images/kmslogo.jpg' alt='logo' />
          </Navbar.Brand>
          <Navbar.Text className='text-light display-5'>
            KMS <sub className='text-light text-italic'>Power Solutions</sub>
          </Navbar.Text>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse className='justify-content-end' id='navbarScroll'>
            <Nav style={{ maxHeight: "60px" }} className='ml-auto'>
              <Nav.Link as={Link} to='/' className='NavLink text-light'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/products' className='NavLink text-light'>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to='/about' className='NavLink text-light'>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to='/contact' className='NavLink text-light'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
