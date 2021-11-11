
import React,{useMemo} from 'react'
import { getHeroByPublisher } from '../../Selector/getHeroByPublisher'
import { HereoCard } from './HereoCard';

export const HeroeList = ({publisher}) => {

    const lisheroe = useMemo(() => getHeroByPublisher(publisher), [publisher]);
    // const lisheroe = getHeroByPublisher(publisher);

    return (
        <div className="row">
            {
                lisheroe.map(
                    h =>(
                        <div key={h.id} className="col-md-3">
                        <HereoCard key={h.id} {...h} />
                        </div>
                    )
                )
            }
        </div>
    )
}
