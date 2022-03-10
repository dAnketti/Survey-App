import { useState } from "react";
import "../../../Login.css";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap-floating-label";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5 loginborder  shadow-lg">
          <form onSubmit={formik.handleSubmit}>
            <h3>Log in</h3>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                name="username"
                value={formik.values.username}
                placeholder="name@example.com"
                onChange={formik.handleChange}
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>

            <div className="d-grid mt-2 gap-2 ">
              <Button variant="secondary" type="submit" size="md">
                Login
              </Button>
            </div>
            <div className="form-group mt-2 mb-2">
              <div className="custom-control custom-checkbox">
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </div>
            </div>

            <div className="d-flex justify-content-end ">
              <p>
                Kaydolmak için{" "}
                <Link to="/register" size="md">
                  tıklayın
                </Link>
              </p>
            </div>
            <div className="d-flex justify-content-end ">
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
