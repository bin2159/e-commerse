import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Header = () => {
    const [show,setshow]=useState(false)
  const showHandle=()=>{
    setshow(prev=>!prev)
  }
  return (
    <Navbar expand="sm" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Cart setShow={showHandle} show={show}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
