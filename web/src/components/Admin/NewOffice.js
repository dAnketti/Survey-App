import React from "react";
import Button from "react-bootstrap/Button";
import "../../Login.css";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

function NewOffice() {
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
              New Office
            </h3>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="email"
                name="email"
                placeholder="name@example.com"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Office Name
              </label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="country"
                name="country"
                placeholder="Country"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Country
              </label>
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="city"
                name="city"
                placeholder="City"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                City
              </label>
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="address"
                name="address"
                placeholder="Address"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Adress
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
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
              />
              <label className="form-label" htmlFor="floatingInputCustom">
                Email address
              </label>
            </Form.Floating>

            <div className="d-grid mt-2 gap-2 ">
              <Button
                className="background-color-primary"
                variant="dark"
                type="submit"
                size="md"
              >
                Add New Office
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewOffice;
