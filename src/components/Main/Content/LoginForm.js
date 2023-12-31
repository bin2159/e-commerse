import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form as RForm, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../../context/TokenContext";
const LoginForm = () => {
  const tokenCtx = useContext(TokenContext);
  const navigate=useNavigate()
  const {
    token: { setToken },
  } = tokenCtx;
  const loaderData = useLoaderData();
  const actionData=useActionData()
  const [errorData,setErrorData]=useState()
  
 useEffect(()=>{
    if (loaderData) {
        if (loaderData === "LOGIN") {
          setToken(false);
          navigate('/store')
        } else {
          setToken(true);
          navigate('/login')
        }
      }
      if (actionData){
        if(actionData==='LOGIN'){
            setToken(true)
            navigate('/store')
        }
        else{
            setToken(false)
            setErrorData(actionData)
        }
      }
 },[actionData,loaderData,navigate,setToken])
    return (
      <>
        <h4 className="display-6 text-center fw-semibold">Login</h4>
        <Container className="w-25 my-4">

          <Row>
            <Col>
              <RForm method="post">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </FloatingLabel>
                {errorData && (
                  <p className="text-center mt-2 my-auto">
                    {errorData.message}
                  </p>
                )}
                <Button
                  type="submit"
                  variant="dark"
                  size="lg"
                  className="mt-2 text-center"
                >
                  Login
                </Button>
              </RForm>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default LoginForm;
