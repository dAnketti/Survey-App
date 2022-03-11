import { useEffect, useState } from "react";
import "../../../Login.css";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/ApiCalls";

function Login() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      login(values).then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert(res.data);
          navigate("/home");
        } else {
          alert("Kullanıcı adı veya şifre hatalı");
        }
      });
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
                name="email"
                value={formik.values.email}
                placeholder="name@example.com"
                onChange={formik.handleChange}
              />
              <label htmlFor="floatingInputCus">Email address</label>
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
              <Button variant="primary" type="submit" size="md">
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

            <div className="d-flex justify-content-end">
              <p>
                {" "}
                <Link to="/register" size="md" className="link-prop">
                  Click Here to Register
                </Link>
              </p>
            </div>
            <div className="d-flex justify-content-end ">
              <p className="forgot-password text-right">
                {" "}
                <a href="#" className="link-prop">
                  Forgot password?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
