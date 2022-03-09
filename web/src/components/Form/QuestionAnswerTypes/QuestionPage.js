import React from "react";
import TextFieldAnswer from "./TextFieldAnswer";
import RadioButton from "./RadioButton";
import MultipleChoice from "./MultipleChoice";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function QuestionPage() {
  return (
    <div>
      <Routes>
        <Route path="/radiobutton">
          <RadioButton />
        </Route>
        <Route path="/textfield">
          <TextFieldAnswer />
        </Route>
        <Route path="/">
          <MultipleChoice />
        </Route>
      </Routes>
    </div>
  );
}

export default QuestionPage;
