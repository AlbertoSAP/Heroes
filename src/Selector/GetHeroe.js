import { heroes } from "../Data/Data"


export const GetHeroe = (name) => {

    if(name === ""){
        return[];
    }
name = name.toLocaleLowerCase();
    return heroes.filter(
        h =>{
            return h.superhero.toLocaleLowerCase().includes(name);
        }
    )  


}
