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
                <p className="pt-3">Answer Type:</p>
                <Link id="navbutton" to="/">
                  <button className="btn ">Multichoice</button>
                </Link>

                <Link id="navbutton" to="/radiobutton">
                  <button className="btn ">Radiobutton</button>
                </Link>

                <Link id="navbutton" to="/textfield">
                  <button className="btn ">Text Field</button>
                </Link>
              </div>

              <QuestionPage />
            </Router>
            <div className="float-right mt-2">
              <button type="button" id="navbutton" className="btn ">
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
