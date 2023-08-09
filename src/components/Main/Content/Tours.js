import { Row, Col, Container, Button } from "react-bootstrap";

const Tours = () => {
  return (
    <Container>
      <h4 className="display-6 text-center fw-semibold">Tours</h4>
      <Row className="mb-1 p-2 border-bottom">
        <Col>JUL16</Col>
        <Col>DETROIT, MI</Col>
        <Col>DTE ENERGY MUSIC THEATRE</Col>
        <Col>
          <Button variant="dark" className="btn btn-sm">BUY TICKETS</Button>
        </Col>
      </Row>
      <Row className="mb-1 p-2 border-bottom">
        <Col>JUL19</Col>
        <Col>TORONTO,ON</Col>
        <Col>BUDWEISER STAGE</Col>
        <Col>
          <Button variant="dark" className="btn btn-sm">BUY TICKETS</Button>
        </Col>
      </Row>
      <Row className="mb-1 p-2 border-bottom">
        <Col>JUL 22</Col>
        <Col>BRISTOW, VA</Col>
        <Col>JIGGY LUBE LIVE</Col>
        <Col>
          <Button variant="dark" className="btn btn-sm">BUY TICKETS</Button>
        </Col>
      </Row>
      <Row className="mb-1 p-2 border-bottom">
        <Col>JUL 29</Col>
        <Col>PHOENIX, AZ</Col>
        <Col>AK-CHIN PAVILION</Col>
        <Col>
          <Button variant="dark" className="btn btn-sm">BUY TICKETS</Button>
        </Col>
      </Row>
      <Row className="mb-1 p-2 border-bottom">
        <Col>AUG 2</Col>
        <Col>LAS VEGAS, NV</Col>
        <Col>T-MOBILE ARENA</Col>
        <Col>
          <Button variant="dark" className="btn btn-sm">BUY TICKETS</Button>
        </Col>
      </Row>
      <Row className="mb-1 p-2 border-bottom">
        <Col>AUG 7</Col>
        <Col>CONCORD, CA</Col>
        <Col>CONCORD PAVILION</Col>
        <Col>
          <Button variant="dark" className="btn btn-sm">BUY TICKETS</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Tours;
