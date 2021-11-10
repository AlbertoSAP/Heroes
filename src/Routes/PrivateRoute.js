import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    element:Component,
    ...rest
}) => {

    const navigate = useNavigate();
console.log(isAuthenticated, 'aqui');
    return (
     <Route
     {...rest}
     element={
         (props)=>(
             (isAuthenticated) ?
             (<Component {...props}/>)
             :( navigate('/Login') )
         )
     }
     />
    )
}

PrivateRoute.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired

}