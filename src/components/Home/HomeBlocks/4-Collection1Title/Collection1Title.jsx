import { Link } from "react-router-dom"
import "./Collection1Title.css"

export const Collection1Title = ()=>{
    return(
        <Link to="/collections/Urban backpacks" className="coleccionesTexto titulocoleccion1">
            <h3 >Urban</h3>
        </Link>
    )
}