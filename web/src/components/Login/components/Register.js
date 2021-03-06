import React from "react";
import Form from "react-bootstrap/Form";
import "../../../Login.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { register } from "../../../api/ApiCalls";

function Register() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      createdDate: Date.now(),
    },
    onSubmit: (values) => {
      register(values).then((res) => {
        alert(res.data);
      });

      navigate("/");
    },
  });

  return (
    <div>
      <div className="container">
        <div className="row asd">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5 loginborder  shadow-lg">
            <form onSubmit={formik.handleSubmit}>
              <h3
                className="
                          color-primary"
              >
                Register
              </h3>

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
              <div className="d-grid mt-2 gap-2 ">
                <Button
                  variant="dark"
                  type="submit"
                  size="md"
                  className="background-color-primary"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
