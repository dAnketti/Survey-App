import React from "react";
import Button from "react-bootstrap/Button";
import "../../Login.css";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function NewClass() {
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
              New Class{" "}
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
              <Form.Select aria-label="Default select example">
                <option>Select Office</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Floating>

            <Form.Floating>
              <Form.Select aria-label="Default select example">
                <option>Select Master Trainer</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Floating>

            <Form.Floating>
              <Form.Select aria-label="Default select example">
                <option>Select Assistant Trainer</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Floating>

            <Form.Floating className="mt-3">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Course Starting Date"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Course Ending Date"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Form.Floating>

            <div className="d-grid mt-2 gap-2 ">
              <Button
                className="background-color-primary"
                variant="dark"
                type="submit"
                size="md"
              >
                Add New Manager
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewClass;
