import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomeComponet = () => {
 const navigate = useNavigate();

    return (
<div className="img-font">
<h1 className="text-center hit-the-floor" >Bienvenido a Heroes App</h1>
<div className="padre" >
<div className="hijo">
<button className="btn btn-outline-success button-size"
onClick={()=> navigate('/dc') }
>Universo Dc</button>
<button className="btn btn-outline-danger ms-4 button-size"
onClick={()=> navigate('/marvel')} >Universo Marvel</button>
</div>
</div>


</div>
    )
}
