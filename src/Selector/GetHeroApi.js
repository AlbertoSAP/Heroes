import axios from "axios";
import { useState } from "react";



export const GetHeroApi = async (name, type) => {
    const [heroe, setHeroe] = useState([]);

  const urlApi = `https://www.superheroapi.com/api.php/4283429655099131/search/${name}`;

  if (name === "") {
    return heroe;
  }

  switch (type) {
    case "get": 

      return await axios
        .get(urlApi).then(
            ({data})=>{
              let {results} = data;  
             setHeroe(results);
            })
    default:
      break;
  }

return heroe

};
