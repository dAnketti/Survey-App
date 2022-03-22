import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ConfigureStore from "./redux/ConfigureStore";
import { Provider } from "react-redux";
import Login from './components/Login/components/Login';
import Register from './components/Login/components/Register';
import Home from './pages/Home';
import PreviewPage from './components/Form/PreviewPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./container/App";

const store = ConfigureStore();

ReactDOM.render(
 
    <Provider store={store}>
        <App/>
    </Provider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
