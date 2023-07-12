import { Link } from "react-router-dom"
import "./Collection3.css"

export const Collection3 = ()=>{
    return(
    <Link className="coleccionesImagenes imagencoleccion3 redondeado" to="/collections/Climbing backpacks">
        <img className="coleccionesImagenes" loading="eager" src="https://i.postimg.cc/TYk324Dj/climbing-home.jpg" alt="imagen collecion 3" />
    </Link>
    )
}

