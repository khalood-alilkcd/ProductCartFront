import { useState } from "react";
import { useThemeHook } from "../GloabalComponents/ThemeProvider";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/high-res.css";
import PhoneInput from "react-phone-input-2";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [theme] = useThemeHook();
  const navigate = useNavigate();
  const [number, setNumber] = useState(null);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form);
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    if (username && password && firstName && lastName && email && number) {
      setLoading(true);
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          firstname: firstName,
          lastname: lastName,
          phone: number,
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={4}
          className={`p-4 rounded ${
            theme ? "text-light bg-dark" : "text-black bg-light"
          }`}
        >
          <h1
            className={`text-center border-bottom pb-3 ${
              theme ? "text-dark-primary" : "text-light-primary"
            }`}
          >
            create account
          </h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3 col-md-6">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 col-md-6">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Group>UserName</Form.Group>
              <Form.Control
                name="username"
                type="text"
                placeholder="UserName"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Mobile number</Form.Label>
              <PhoneInput
                defaultCountry={"us"}
                value={number}
                className="text-dark"
                onChange={(phone) => setNumber(phone)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="password"
                minLength={6}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              className={`${
                theme ? "bg-dark-primary text-black" : "bg-light-primary"
              } m-auto d-block`}
              disabled={loading}
              style={{ border: 0 }}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp;loading...
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
