import { heroes } from "../Data/Data";

export const getHeroByPublisher = (publisher) => {


    const ValidPublishers = ['DC Comics', 'Marvel Comics'];

    if(! ValidPublishers.includes(publisher)){
        throw new Error(`Publishers ${publisher} no es correcto`)
    }
    else{
     return heroes.filter(h => {
            return h.publisher === publisher; 
        })
    }

}