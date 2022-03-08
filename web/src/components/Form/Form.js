import { useState, useEffect } from "react";
import logoDanket from "../../danketlow.png";
import "../../App.css";
import { useFormik } from "formik";
import { postQuestion } from "../../api/ApiCalls";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RadioButton from "./QuestionAnswerTypes/RadioButton";
import MultipleChoice from "./QuestionAnswerTypes/MultipleChoice";
import QuestionPage from "./QuestionAnswerTypes/QuestionPage";

function Form() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      questionBody: "",
    },
    onSubmit: (values) => {
      const body = {
        questionBody: values.questionBody,
      };
      postQuestion(body);
    },
  });

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              style={{ borderRadius: 10 }}
              src={logoDanket}
              alt=""
              alt=""
              width="70"
            />
          </a>
        </div>
      </nav>

      <div className="row mt-5">
        <div className="col-md-3 "></div>
        <div id="question-area" className="col-md-6">
          <form onSubmit={handleSubmit}>
            <label for="exampleFormControlInput1" className="form-label">
              Enter your question
            </label>
            <textarea
              className="form-control"
              name="questionBody"
              value={values.questionBody}
              onChange={handleChange}
              aria-label="With textarea"
              readonly
            ></textarea>

            <Router>
              <div
                className="btn-group btn-group-lg d-flex justify-content-between mt-3"
                role="group"
                aria-label="Option Selection"
              >
                <button className="btn btn-group">
                  <Link className="text-decoration-none" to="/">
                    Multichoice
                  </Link>
                </button>
                <button className="btn btn-group">
                  <Link className=" text-decoration-none" to="/radiobutton">
                    Radiobutton
                  </Link>
                </button>
                <button className="btn btn-group">
                  <Link className="text-decoration-none" to="/textfield">
                    Text Field
                  </Link>
                </button>
              </div>

              <QuestionPage />
            </Router>
            <div className="float-right mt-2">
              <button type="button" className="btn btn-group border ">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Form;
