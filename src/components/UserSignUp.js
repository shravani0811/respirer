import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Col,
  Input,
  Label,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  FormGroup,
  CardFooter,
} from "reactstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UserSignup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/inventory");
    } catch (error) {
      console.log(error)
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <>
        <div className="wrapper">
          <div className="page-header">
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <Card className="card-register" style={{background: "#212124"}}>
                      <CardHeader>
                      
                        <CardTitle tag="h3">Register</CardTitle>
                      </CardHeader>
                      <CardBody style={{background: "#212124"}}>
                        {error && (
                          <Alert
                            variant="danger"
                            style={{ backgroundColor: "red" }}
                          >
                            {error}
                          </Alert>
                        )}
                        <Form className="form" onSubmit={handleSubmit}>
                          <Input 
                          style={{borderColor:"#FFFFFF"}}
                            innerRef={emailRef}
                            placeholder="Email"
                            type="text"
                          />
                          <Input 
                            style={{ marginTop: "1rem", borderColor:"#FFFFFF" }}
                            innerRef={passwordRef}
                            placeholder="Password"
                            type="password"
                          />
                          <Input
                            style={{ marginTop: "1rem", borderColor:"#FFFFFF" }}
                            innerRef={passwordConfirmRef}
                            placeholder="Confirm Password"
                            type="password"
                          />
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />I agree to the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button
                          disabled={loading}
                          className="btn-wrapper"
                          color="success"
                          size="lg"
                          onClick={handleSubmit}
                        >
                          Sign Up
                        </Button>
                      </CardFooter>
                    </Card>
                    <div className="text-center">
                      Already have an account? <Link to="/login">Log In</Link>
                    </div>
                  </Col>
                  <Col style={{alignContent: "center", justifyContent: "center"}}>
                  <div className="content-center brand">
              <h1 className="h1-seo text-white-head">Join Us</h1>
              <p className="text-white">
              Discover the untapped value in food's leftovers. Register with Respirer and turn organic by-products into sustainable solutions.

              </p>
            
              {/* <h1 className="text-white font-weight-light">
                Join Us
              </h1>
              <p className="text-white font-italic">
              Discover the untapped value in food's leftovers. Register with Respirer and turn organic by-products into sustainable solutions.
              </p> */}
              <img
                    alt="..."
                    className="img-fluid"
                    src={require("../assets/img/JoinUs.png")}
                  />
                  </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Respirer</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}
    </>
  );
}
