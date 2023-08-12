
import {Col} from "react-bootstrap";
import { useContext} from "react";
import MusicContext from "../../../context/MusicContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from "../../../context/CartContext";
import {  Link } from "react-router-dom";
const ProductList = ({setToast,setNotifyItem,product}) => {
  const musicCtx = useContext(MusicContext);
  const {
    musicProducts: { items },
  } = musicCtx;
  const cartCtx=useContext(CartContext)
  const {cartProducts:{addItem}}=cartCtx
  const cartHandler=(e)=>{
    addItem(e.target.id)
    const [item]=items.filter(item=>item.id===e.target.id)
    setNotifyItem(item.title)
    setToast()
  }
  const list=product?product:items
  return (

      <>{list.map((item) => (
          <Col md={6} key={item.id}>
            <Card style={{ width: "18rem" }} className="mx-auto m-3">
            <Link to={`product/${item.id}`} style={{color:'black'}}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  ${item.price}
                </Card.Text>
                <div className="text-center">
                </div>
              </Card.Body>
              </Link>
              
              <Button id={item.id} variant="dark" onClick={cartHandler}>Add to Cart</Button>

            </Card>
           
          </Col>
        ))}
      
      </>
        

  );
};

export default ProductList;
