import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-secondary d-flex " fluid>
      <Row className=" align-items-center m-auto">
        <Col xs='auto'>
            <h3 className="text-light text-center">The Generic</h3>
        </Col>
        <Col>
            <i className="bi bi-youtube"></i>
        </Col>
        <Col>
        <i class="bi bi-spotify"></i>
        </Col>
        <Col>
        <i class="bi bi-facebook"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
