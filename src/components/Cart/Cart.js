import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartList from './CartList';
const Cart = ({ setShow,show }) => {
  return (
    <>
      <Button variant="dark" className="position-relative" onClick={setShow}>
        <i className="bi bi-cart4"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
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
