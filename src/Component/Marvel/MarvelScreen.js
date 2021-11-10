import React from 'react'
import { HeroeList } from '../Heroes/HeroeList'

export const MarvelScreen = () => {
    const publisher ="Marvel Comics";
    return (
        <div>
             <h1 className="text-center" >MarvelScreen</h1>

             <HeroeList publisher={publisher} />

        </div>
    )
}
