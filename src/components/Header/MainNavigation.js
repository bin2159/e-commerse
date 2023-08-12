
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart/Cart";
import { useState,  useContext } from "react";
import { NavLink } from "react-router-dom";
import TokenContext from "../../context/TokenContext";
const MainNavigation = () => {
    const [show,setshow]=useState(false)
  const showHandle=()=>{
    setshow(prev=>!prev)
  }
  const tokenCtx=useContext(TokenContext)
  const {token:{token}}=tokenCtx
  // const [token,setToken]=useState(false)
  // useEffect(()=>{
  //   const token=localStorage.getItem('token')
  //   setToken(!!token)
  // },[])
  return (
    <Navbar expand="sm" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to=''>Home</NavLink>
            <NavLink  className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to="store">Store</NavLink>
            <NavLink  className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to="about">About</NavLink>
            <NavLink  className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to="contact">Contact Us</NavLink>
            <NavLink  className='me-3' style={({isActive})=>isActive?{color:'white'}:{color:'gray'}} to={token?'login?mode=out':'login'}>{token?'Logout':'Login'}</NavLink>
            {token&&<Cart setShow={showHandle} show={show}/>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;