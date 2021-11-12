import React from 'react'
import { HeroeList } from '../Heroes/HeroeList'

export const DcScreen = () => {
  const publisher = "DC Comics";
    return (
        <div>
            <h1 className="text-center" >Bienvenido {publisher}</h1>

            <HeroeList publisher={publisher} />
        </div>
    )
}
