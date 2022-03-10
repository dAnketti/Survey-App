import React from "react";
import { Navigate, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap-floating-label";
import "../../../Login.css";
import { useFormik } from "formik";
import Home from "../../../pages/Home";

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      createdDate: Date.now(),
    },
    onSubmit: (values) => {
      console.log(values);

      <Navigate to="/home" />;
    },
  });
  return (
    <div>
      <div className="container">
        <div className="row asd">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5 loginborder  shadow-lg">
            <form onSubmit={formik.handleSubmit}>
              <h3>Register</h3>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Jon"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="floatingInputCustom">
                  Name
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="tel"
                  name="phoneNumber"
                  placeholder="05050500550"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="floatingInputCustom">
                  Email address
                </label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <label htmlFor="floatingInput" className="form-label">
                  Password
                </label>
              </Form.Floating>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
