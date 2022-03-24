import React from "react";
import Button from "react-bootstrap/Button";
import "../../Login.css";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

function NewTrainer() {
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
              New Trainer{" "}
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
                type="lastname"
                name="lastname"
                placeholder="Lastname"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Lastname
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
                Password
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

            <Form.Floating className="mb-3">
              <Form.Select
                className="pt-3 pb-3"
                aria-label="Default select example"
              >
                <option>Select Trainer Type</option>
                <option value="1">Master</option>
                <option value="2">Assistant</option>
              </Form.Select>
            </Form.Floating>

            <div className="d-grid mt-2 gap-2 ">
              <Button
                className="background-color-primary"
                variant="dark"
                type="submit"
                size="md"
              >
                Add New Trainer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTrainer;
