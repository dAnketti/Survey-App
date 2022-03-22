import React from "react";
import Login from '../components/Login/components/Login';
import Register from '../components/Login/components/Register';
import Home from '../pages/Home';
import PreviewPage from '../components/Form/PreviewPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar";

const App = () => {
    return (
        <div>
            <NavigationBar/>
            <BrowserRouter>                
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="register" element={<Register />} />       
                <Route path="/preview" element={<PreviewPage />} />
                </Routes>
            </BrowserRouter>
      </div>
    );
};

export default App;

