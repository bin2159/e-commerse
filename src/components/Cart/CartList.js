import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

const CartList = () => {
  const cartCtx = useContext(CartContext);
  const {
    cartProducts: { items },
  } = cartCtx;
  return (
    <Container>
      <Row className="fw-bold fs-4 mb-3">
        <Col>Item</Col>
        <Col className="justify-content-center d-flex">Price</Col>
        <Col>Quantity</Col>
      </Row>

      {items.map((item) => (
        <Row className="align-items-center mb-3 " key={item.title}>
          <Col>{item.title}</Col>
          <Col className="justify-content-center d-flex">{item.price}</Col>
          <Col className="justify-content-between d-flex">{item.quantity}
          <Button variant='secondary' className="btn-sm">Remove</Button></Col>
        </Row>
      ))}
      <div className="text-center m-5">
      <Button variant="dark">Puschase</Button>
      </div>
      
    </Container>
  );
};

export default CartList;
