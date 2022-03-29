import "../../../Login.css";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, rememberClicked } from "../../../redux/AuthAction";
function Login() {
  const { auth: tempAuth } = useSelector((store) => ({
    auth: store.auth,
  }));

  const dispatch = useDispatch();

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: tempAuth.rememberMe && tempAuth.user ? tempAuth.user.email :"",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const credentials={
          email:values.email,
          password:values.password
        }
        const response = await login(credentials);
        dispatch(loginSuccess(response.data));
        navigate("/home");
      } catch (e) {
        console.log(e.data);
      }
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5 loginborder  shadow-lg">
          <form onSubmit={formik.handleSubmit}>
            <h3
              className="
            color-primary"
            >
              Log in
            </h3>

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
              <Button
                className="background-color-primary"
                variant="dark"
                type="submit"
                size="md"
              >
                Login
              </Button>
            </div>
            <div className="form-group mt-2 mb-2">
              <div className="custom-control custom-checkbox">
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Check me out"
                    checked={tempAuth.rememberMe}
                    onChange={(e) => {
                      dispatch(rememberClicked(e.target.checked));
                    }}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <p>
                {" "}
                <Link
                  to="/register"
                  size="md"
                  className="link-prop color-primary"
                >
                  Click Here to Register
                </Link>
              </p>
            </div>
            <div className="d-flex justify-content-end ">
              <p className="forgot-password text-right">
                {" "}
                <Link to="/" className="link-prop color-primary">
                  Forgot password?
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
