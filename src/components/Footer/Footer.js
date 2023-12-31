import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-secondary d-flex justify-content-evenly position-fixed bottom-0" fluid>
      <Row className=" align-items-center  m-auto">
        <Col xs='auto'>
            <h3 className="text-light text-center h1">The Generic</h3>
        </Col>
        <Col>
            <i className="bi bi-youtube"></i>
        </Col>
        <Col>
        <i className="bi bi-spotify"></i>
        </Col>
        <Col>
        <i className="bi bi-facebook"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
