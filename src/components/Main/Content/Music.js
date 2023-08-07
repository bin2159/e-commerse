import Container from "react-bootstrap/esm/Container";
import { Row, Col} from "react-bootstrap";
import { useContext, useState } from "react";
import MusicContext from "../../../context/MusicContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from "../../../context/CartContext";
import Notify from "./Notify";
const Music = () => {
  const [toast,setToast]=useState(false)
  const musicCtx = useContext(MusicContext);
  const cartCtx=useContext(CartContext)
  const {
    musicProducts: { items },
  } = musicCtx;
  const {cartProducts:{addItem}}=cartCtx
  const cartHandler=(e)=>{
    addItem(e.target.id)
    setToast(true)
  }
  return (
    <>
    <Container>
        <h4 className="display-6 text-center fw-semibold">Music</h4>
      <Row>
        {items.map((item) => (
          <Col md={6} key={item.title}>
            <Card style={{ width: "18rem" }} className="mx-auto m-3">
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  ${item.price}
                </Card.Text>
                <div className="text-center">
                    <Button id={item.title} variant="dark" onClick={cartHandler}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Notify show={toast} setShow={setToast}/>
    </>
  );
};

export default Music;
