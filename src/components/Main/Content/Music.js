import Container from "react-bootstrap/esm/Container";
import { Row} from "react-bootstrap";

import Notify from "./Notify";

import ProductList from "./ProductList";
import { useState } from "react";
const Music = () => {
  const [toast,setToast]=useState(false)
  // const musicCtx = useContext(MusicContext);
  // const cartCtx=useContext(CartContext)
  const [notifyItem,setNotifyItem] = useState('')
  // const {
  //   musicProducts: { items },
  // } = musicCtx;
  // const {cartProducts:{addItem}}=cartCtx
  // const cartHandler=(e)=>{
  //   addItem(e.target.id)
  //   setNotifyItem(e.target.id)
  //   setToast(true)
  // }
  const notifyHandler=(item)=>{
    setNotifyItem(item)
  }
  const toastHandler=()=>{
    setToast()
  }
  return (
    <>
    <Container>
        <h4 className="display-6 text-center fw-semibold">Music</h4>
      {/* <Row>
        {items.map((item) => (
          <Col md={6} key={item.title}>
            
            <Card style={{ width: "18rem" }} className="mx-auto m-3">
            <Link to={`product/${item.title}`} style={{color:'black'}}>
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
              </Link>
            </Card>
           
          </Col>
        ))}
      </Row> */}
      <Row>
      <ProductList setToast={toastHandler} setNotifyItem={notifyHandler}/>

      </Row>
    </Container>
    <Notify show={toast} setShow={setToast} item={notifyItem}/> 
    </>
  );
};

export default Music;
