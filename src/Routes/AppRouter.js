
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { LoginScreen } from "../Auth/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { AuthContext } from "../Auth/AuthContex";


export const AppRouter = () => {
  const {user} = useContext(AuthContext);
console.log(user);
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/Login" element={<LoginScreen />} />
       <Route path="*" element={ 
       user.logged ?
       <DashboardRouter />
      :
      <LoginScreen/>
       
       }/> 
        
        
        </Routes>
      </div>
      
    </Router>
  );
};
