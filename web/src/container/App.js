import React from "react";
import Login from '../components/Login/components/Login';
import Register from '../components/Login/components/Register';
import Home from '../pages/Home';
import PreviewPage from '../components/Form/PreviewPage';
import { BrowserRouter, Routes as Switch, Route,Navigate } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar";
import { useSelector } from "react-redux";

const App = () => {
    const {isLoggedIn} =useSelector((store)=>({isLoggedIn:store.auth.isLoggedIn}));   
    return (
        <div>                  
            <BrowserRouter>      
                {isLoggedIn && <NavigationBar/>}              
                <Switch>     
                <Route path="/" element={isLoggedIn ? <Home/> : <Login />} /> 
                <Route path="register" element={<Register />} />                
                {
                    isLoggedIn &&<>
                    <Route path="/home" element={<Home />} />
                    <Route path="/preview" element={<PreviewPage />} />
                    </>                    
                }    
                      
                                     
                <Route path="*"  element={<Navigate to="/" replace />}
    />
                </Switch>
            </BrowserRouter>
      </div>
    );
};

export default App;

