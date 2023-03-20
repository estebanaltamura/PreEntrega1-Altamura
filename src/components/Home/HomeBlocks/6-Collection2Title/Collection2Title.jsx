import { Link } from "react-router-dom"
import "./Collection2Title.css"

export const Collection2Title = ()=>{
    return(
        <Link className="coleccionesTexto titulocoleccion2" to="/collections/Travel backpacks">
            <h3 >Travel</h3>
        </Link>
    )
}