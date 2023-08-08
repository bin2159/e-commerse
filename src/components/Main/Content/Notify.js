import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';
const Notify = ({show,setShow,item}) => {
  return (
    <Row>
      <Col xs={6}>
      <ToastContainer
          className="p-3 position-fixed bottom-0 end-0"
          
          style={{ zIndex: 1 }}
        >
          <Toast  onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added</strong>
            </Toast.Header>
            <Toast.Body>You have add <b className='fst-italic'> {item} </b>to your cart</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  )
}

export default Notify