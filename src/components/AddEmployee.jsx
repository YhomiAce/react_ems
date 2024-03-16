import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SpinnerComponent from "./Spinner";

const AddEmployee = ({ submit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log({ errors });

  return (
    <Container>
      <Row>
        <Col>
          <Form id="create-form" onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                {...register("firstName", {
                  required: "This is a required field",
                })}
              />
              {errors && errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                {...register("lastName", {
                  required: "This is a required field",
                })}
              />
              {errors && errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register("email", { required: "This is a required field" })}
              />
              {errors && errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 float-end">
              {isLoading ? <SpinnerComponent /> : "Add Employee"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEmployee;
