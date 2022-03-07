import { useState, useEffect } from "react";
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
      questionBody: "Write answer",
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
      <h1>Soru hazırlama ekranı</h1>
      <Router>
        <div
          className="btn-group btn-group-lg d-flex justify-content-center"
          role="group"
          aria-label="Option Selection"
        >
          <button className="btn btn-group">
            <Link to="/">Çoktan Seçmeli</Link>
          </button>
          <button className="btn btn-group">
            <Link to="/radiobutton">Radiobutton</Link>
          </button>
          <button className="btn btn-group text-center">
            <Link to="/textfield">Text Field</Link>
          </button>
        </div>

        <div className="row">
          <div className="col-md-3 "></div>
          <div className="col-md-6">
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

              <QuestionPage />

              <div className="float-right mt-2">
                <button type="button" className="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </Router>
    </div>
  );
}

export default Form;
