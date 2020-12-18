import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Narvbarz = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">chris pondoc</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">home</Nav.Link>
        <Nav.Link href="/about">about</Nav.Link>
        <Nav.Link href="/contact">contact</Nav.Link>
        <Nav.Link href="/blog">blog</Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1AkB5LR8Ml4IBojdhWAa-r7NdnAuGSDb-/view">cv</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Narvbarz