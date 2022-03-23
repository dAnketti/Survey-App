import React from "react";
import Login from "../components/Login/components/Login";
import Register from "../components/Login/components/Register";
import Home from "../pages/Home";
import PreviewPage from "../components/Form/PreviewPage";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import NavigationBar from "../pages/NavigationBar";
import { useSelector } from "react-redux";
import NewManager from "../components/Admin/NewManager";
import NewTrainer from "../components/Admin/NewTrainer";
import NewOffice from "../components/Admin/NewOffice";
import NewClass from "../components/Manager/NewClass";
import NewStudent from "../components/Manager/NewStudent";
const App = () => {
  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: true,
  }));
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <NavigationBar />}
        <Switch>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="register" element={<Register />} />
          {isLoggedIn && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/preview" element={<PreviewPage />} />
              <Route path="/newmanager" element={<NewManager />} />
              <Route path="/newtrainer" element={<NewTrainer />} />
              <Route path="/newoffice" element={<NewOffice />} />
              <Route path="/newclass" element={<NewClass />} />
              <Route path="/newstudent" element={<NewStudent />} />
            </>
          )}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
