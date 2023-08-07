import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import MusicContext from "../../../context/MusicContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Music = () => {
  const musicCtx = useContext(MusicContext);
  console.log(musicCtx)
  const {
    musicProducts: { items },
  } = musicCtx;
  console.log(items);
  return (
    <Container>
        <h4 className="display-6 text-center">Music</h4>
      <Row>
        {items.map((item) => (
          <Col md={6}>
            <Card style={{ width: "18rem" }} className="mx-auto m-3">
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  ${item.price}
                </Card.Text>
                <div className="text-center">
                    <Button variant="dark">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Music;
