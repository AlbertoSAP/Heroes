 import { heroes } from "../Data/Data";

export const getHeroById = (id) => {

    // validar 

    console.log(id);
          return heroes.find(h => {
                return h.id === id; 
            }) 
}
