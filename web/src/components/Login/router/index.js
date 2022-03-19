import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import Form from "../../Form/QuestionAnswerTypes/Form";
import PreviewPage from "../../Form/PreviewPage";
import Login from "../components/Login";
import Register from "../components/Register";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="/form" element={<Form />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
