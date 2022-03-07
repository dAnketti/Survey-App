import React from "react";
import TextFieldAnswer from "./TextFieldAnswer";
import RadioButton from "./RadioButton";
import MultipleChoice from "./MultipleChoice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function QuestionPage() {
  return (
    <div>
      <Switch>
        <Route path="/radiobutton">
          <RadioButton />
        </Route>
        <Route path="/textfield">
          <TextFieldAnswer />
        </Route>
        <Route path="/">
          <MultipleChoice />
        </Route>
      </Switch>
    </div>
  );
}

export default QuestionPage;
