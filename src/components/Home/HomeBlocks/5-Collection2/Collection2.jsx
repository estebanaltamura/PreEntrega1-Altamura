import { Link } from "react-router-dom"
import "./Collection2.css"

export const Collection2 = ()=>{
    return(
        <Link className="coleccionesImagenes imagencoleccion2 redondeado" to="/collections/Travel backpacks">
            <img className="coleccionesImagenes" loading="eager" src="https://i.postimg.cc/FH7sYVyM/travel-home.jpg" alt="imagen collecion 2" />
        </Link>
    )
}