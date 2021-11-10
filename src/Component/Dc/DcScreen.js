import React from 'react'
import { HeroeList } from '../Heroes/HeroeList'

export const DcScreen = () => {
  const publisher = "DC Comics";
    return (
        <div>
            <h1 className="text-center" >DcScreen</h1>

            <HeroeList publisher={publisher} />
        </div>
    )
}
