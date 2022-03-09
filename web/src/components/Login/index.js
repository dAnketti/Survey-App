import React from "react";
import Login from "./components/Login";
import Signup from "./components/Register";
import FormRouter from "./router/index";

function index() {
  return (
    <div>
      <FormRouter />
    </div>
  );
}

export default index;
