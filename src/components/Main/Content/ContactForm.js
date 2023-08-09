import { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


const ContactForm = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const phoneRef=useRef()
    const formHandler=async (e)=>{
        e.preventDefault()
        const input={
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value
        }
        const response= await fetch('https://e-commerse-132c5-default-rtdb.firebaseio.com/userData.json',{
            method:'POST',
            body:JSON.stringify(input),
            headers:{
                'Content-Type':'application.json'
            }
        })
        const data=await response.json()
        console.log(data)
    }
  return (
    <>
      <h4 className="display-6 text-center fw-semibold">Contact Us</h4>

      <Container className="w-50">
        <Row>
          <Col>
            {" "}
            <FloatingLabel
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Name" ref={nameRef}/>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <FloatingLabel
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              label="Phone"
              className="mb-3"
            >
              <Form.Control type="phone" placeholder="Phone" ref={phoneRef} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
            <Col>
            <div className="text-center">
                <Button variant="dark" onClick={formHandler}>Submit</Button>
            </div>
            
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactForm;
