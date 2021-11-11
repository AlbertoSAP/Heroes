import React from "react";
import { Link } from "react-router-dom";
import './styleh.css'

export const HereoCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}
) => {
    return (
        <div className="container">
      <div className="card mt-2 shadow-lg card-circle" style={{boderRadius: 10 }} >
        <img className="card-circle swing" src={`./assets/heroes/${id}.jpg`} alt={id} />
        <h3 className="text-center mt-2">{superhero}</h3>
        <h5 className="text-center mt-2 text-warning">{alter_ego}</h5>
        <p 
        className={
             publisher === 'DC Comics' ? 
             'mt-2 text-end mx-2 text-primary fw-bold'
             :
             'mt-2 text-end mx-2 text-danger fw-bold' }>{publisher}</p>
            <div className="text-lg-center pb-2" >
             {/* <p className="mt-2">{first_appearance}</p>
             <label>{characters}</label> */}
             </div>
             <div className="card-footer text-center">        
        <Link to={`/hero/${id}`} className="btn btn-outline-success button-circle">Ver Mas</Link>
             </div>
      </div>
    </div>
  );
};
