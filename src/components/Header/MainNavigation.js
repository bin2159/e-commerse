
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
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
          <Nav className="ms-auto align-items-center">
            <NavLink className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to='./home'>Home</NavLink>
            <NavLink  className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to="./store">Store</NavLink>
            <NavLink  className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to="./about">About</NavLink>
            <Cart setShow={showHandle} show={show}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;