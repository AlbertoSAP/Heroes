import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContex";
import './shared.css';
import { type } from "../type/type";

export const NavBar = () => {
const navigate =useNavigate();
  const {user:{user,logget}, dispatch} = useContext(AuthContext)

  const clicklogout =() => {
dispatch({
  type: type.logout,
  logget:false
})
navigate('/Login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to={"/"}>
        Heroes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/home"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/Dc"}>
              Dc
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/Marvel"}>
              Marvel
            </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to={"/search"}>
              Search
            </Link>
          </li>
         
        </ul>
      {/* datos */}
      <form class="d-flex">
          {
          user ?   <li className="nav-item ">
          <span className="text-danger mx-2"> ¡hi {user} ! </span>
         </li>:''
        }
    
       { 
       logget &&
       <li className="nav-item">
            <Link className="nav-link" to={"/Login"}>
              Login
            </Link>
          </li>}
          <li className="nav-item">
          {user ?              <button className="btn btn-danger"
            onClick={clicklogout}
            >Logout</button>:''
      }
          </li>
          {/* datos */}
          </form>
      </div>
    </div>
  </nav>
  );
};
