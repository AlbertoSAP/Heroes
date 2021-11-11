import React from 'react'
import './shared.css';

export const FooterComponent = () => {
    return (
 
  <footer className="text-center text-lg-start fixed-footer" style={{backgroundColor: "black"}}>
    <div className="container d-flex justify-content-center py-2">
      <button type="button" className="btn btn-dark btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b;"}}>
        <i className="fab fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-dark btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b;"}}>
        <i className="fab fa-youtube"></i>
      </button>
      <button type="button" className="btn btn-dark btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b;"}}>
        <i className="fab fa-instagram"></i>
      </button>
      <button type="button" className="btn btn-dark btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b;"}}>
        <i className="fab fa-twitter"></i>
      </button>
    </div>
  </footer>
    )
}
