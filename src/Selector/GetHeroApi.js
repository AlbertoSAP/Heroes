import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



export const GetHeroApi = async (name) => {
    const [heroe, setHeroe] = useState([]);

   useEffect(() => {
   }, [heroe])

  const urlApi = `https://www.superheroapi.com/api.php/4283429655099131/search/${name}`;

  if (name === "") {
    return heroe;
  }
  else{
      return await axios
        .get(urlApi).then(
            ({data})=>{
              let {results} = data;  
           setHeroe(results);
            })
          }
}
