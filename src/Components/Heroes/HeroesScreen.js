import React,{useMemo} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../Selector/getHeroById";
import "./styleh.css";

export const HeroesScreen = () => {
  const navigate =  useNavigate();



  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroById(heroeId), [heroeId]) 
  //getHeroById(heroeId);
  const redirection = () => {
    return navigate("/Marvel");
  };

  if (!heroe) {
    redirection();
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;

  return (
    <div className="container">
      <h1 className="text-center">HeroesScreen</h1>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <img
              className="max-img animate__animated animate__backInDown"
              sty
              src={`../assets/heroes/${heroeId}.jpg`}
              alt={heroeId}
            />
          </div>
        </div>
        <div className="col-md-8 max-img">
          <h1>Heroe: {superhero}</h1>
          <h2>Nombre: {alter_ego}</h2>
          <h3
            className={
              publisher === "DC Comics"
                ? "mt-2 mx-2 text-primary fw-bold"
                : "mt-2 mx-2 text-danger fw-bold"
            }
          >
            Universo: {publisher}
          </h3>
          <label>Primera Aparicion: {first_appearance}</label>
          <div>
          <button className="btn btn-success mt-5" onClick={()=>{
              navigate(-1);
          }} >Salir</button>
          </div>
        </div>
      </div>
    </div>
  );
};
