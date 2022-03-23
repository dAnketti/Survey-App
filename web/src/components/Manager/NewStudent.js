import React from "react";
import Button from "react-bootstrap/Button";
import "../../Login.css";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

function NewStudent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5 loginborder  shadow-lg">
          <form onSubmit={Formik.handleSubmit}>
            <h3
              className="
          color-primary"
            >
              New Student{" "}
            </h3>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="name"
                name="name"
                placeholder="Name"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Name
              </label>
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="email"
                name="email"
                placeholder="name@example.com"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Mail
              </label>
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="Password"
                name="password"
                placeholder="Address"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Identity Number
              </label>
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="tel"
                name="phoneNumber"
                placeholder="05*********"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Phone Number
              </label>
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="email"
                name="email"
                placeholder="name@example.com"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Mail
              </label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Select Office</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Floating>

            <div className="d-grid mt-2 gap-2 ">
              <Button
                className="background-color-primary"
                variant="dark"
                type="submit"
                size="md"
              >
                Add New Student
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewStudent;
