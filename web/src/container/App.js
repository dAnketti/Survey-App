import React from "react";
import Login from "../components/Login/components/Login";
import Register from "../components/Login/components/Register";
import Home from "../pages/Home";
import PreviewPage from "../components/Form/PreviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar";
import NewOffice from "../components/Admin/NewOffice";
import NewManager from "../components/Admin/NewManager";
import NewTrainer from "../components/Admin/NewTrainer";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/newoffice" element={<NewOffice />} />
          <Route path="/newmanager" element={<NewManager />} />
          <Route path="/newtrainer" element={<NewTrainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
