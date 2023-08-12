import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartList from './CartList';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
const Cart = ({ setShow,show }) => {
    const cartCtx=useContext(CartContext)
    const {cartProducts:{items}}=cartCtx
    const totalItem=items?items.reduce((acc,curr)=>{return Number(curr.quantity)+acc},0):''
  return (
    <>
      <Button variant="dark" className="position-relative" onClick={setShow}>
        <i className="bi bi-cart4"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItem}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Button>
      <Offcanvas show={show} onHide={setShow} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartList/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
