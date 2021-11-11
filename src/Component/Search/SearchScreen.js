import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { GetHeroe } from "../../Selector/GetHeroe";
import { HereoCard } from "../Heroes/HereoCard";
import { useForm } from "../Hooks/useForm";
import Swal from "sweetalert2";

export const SearchScreen = () => {
  // 
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // funsion
  const [values, handleinputchange, reset] = useForm({
    busq: "",
  });
  const { busq } = values;
  //
  console.log(busq);

 
useEffect(() => {
}
, [values])

  // eventos
  const submitEvent = (e) => {
    e.preventDefault();
    navigate(`?q=${busq}`);
    const q = searchParams.get("q");
    console.log(q, "query");
    reset();
  };
  const filters = GetHeroe(busq);
  if(busq !== ""){
    if(filters.length === 0){
      Swal.fire('No Found',`el heroe "${busq}" no encontrado`,'info');
      }
    }


  return(
    <div className="container">
      <h1 className="text'center">Busqueda</h1>
      <hr />
      <form onSubmit={submitEvent}>
        <div className="form-group">
          <input
            type="text"
            name="busq"
            id="busq"
            values={busq}
            onChange={handleinputchange}
            className="form-control"
            placeholder="Batman"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-outline-success mt-2">
            Buscar
          </button>
        </div>
      </form>
      <div className="row mt-3">
        {filters.map((h) => (
          <div key={h.id} className="col-md-3">
            <HereoCard key={h.id} {...h} />
          </div>
        ))}
      </div>
    </div>
  );
};
