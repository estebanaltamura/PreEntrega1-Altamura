import {Link} from "react-router-dom"
import "./Collection1.css"

export const Collection1 = ()=>{
    return(
        <Link className="coleccionesImagenes imagencoleccion1 redondeado" to="/collections/Urban backpacks">
            <img className="coleccionesImagenes" src="https://i.postimg.cc/mgJZC1Vt/urban-home.jpg" alt="imagen collecion 1" />
        </Link>
    )
}