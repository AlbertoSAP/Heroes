import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../Component/Hooks/useForm";
import { type } from "../type/type";
import { AuthContext } from "./AuthContex";

import "./login.css";
import Swal from "sweetalert2";



export const LoginScreen = () => {
  const {dispatch} = useContext(AuthContext);
  const [values, handleinputchange] = useForm({
    user:'', password:''
  });

  const {user, password} = values

  const navigate = useNavigate();
  const ClickLogin = (e) => {
    e.preventDefault();
    if(user !== "" & password !=="" ){
      dispatch({
        type: type.login  ,
        payload: {
          user,
          password
        }  
      })
      navigate('/Marvel');
    }else{
     Swal.fire('Error',`Por favor complete el formulario `,'error')
    }


  };

  return (
    <>
      <div className="mt-5 d-flex justify-content-md-center">
        <div className="card shadow-lg w-50 ">
          <div className="card-header text-center font-img rounded">
            <h3 className="fw-bold" style={{ color: "blue" }}>
              Login
            </h3>
            <div className="flex-fill">
              <img
                src="https://www.dccomics.com/sites/all/themes/dc_comics_bp/logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-4 pb-3">
            <div className="form-group text-center mt-3">
              <label>User</label>
              <input type="text" className="form-control" 
              name ="user"
              value={user}
              onChange={handleinputchange}
              />
            </div>
            <div className="form-group text-center mt-3">
              <label>Password</label>
              <input type="password" className="form-control"
              name="password"
              value={password}
              onChange={handleinputchange}
              />
            </div>
            <div className="form-group text-center mt-3">
              <button className="btn btn-outline-success" onClick={ ClickLogin}>
                Inicio
              </button>
            </div>
          </div>
          <div className="container d-flex justify-content-center pb-3">
            <button
              type="button"
              className="btn btn-dark btn-lg btn-floating mx-2"
              style={{ "background-color": "#54456b;" }}
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg btn-floating mx-2"
              style={{ "background-color": "#54456b;" }}
            >
              <i className="fab fa-instagram"></i>
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg btn-floating mx-2"
              style={{ "background-color": "#54456b;" }}
            >
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
