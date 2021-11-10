import React from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { AuthContext } from './Auth/AuthContex'
import { authReduce } from './Auth/authReduce'
import { AppRouter } from './Routes/AppRouter'

const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {
        logget:false
    }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReduce, {}, init)

    useEffect(() => {
    localStorage.setItem('user',JSON.stringify(user));
}, [user]);

 

    return (
        <AuthContext.Provider value={{user, dispatch}} >
          <AppRouter/>
          </AuthContext.Provider>
    )
}
