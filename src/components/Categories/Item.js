import { Link } from "react-router-dom";
import "./Item.css"


export const Item = ({imagen, nombre, precio, id, index})=>{ 
    
    
    return(
        <Link className={`card card${index+1}`} to={`/products/${id}`}>
            <img className={`imagenCard${index + 1} imagenCard`} src={imagen} alt="foto"></img>
            <p className={`tituloCard${index + 1} tituloCard`}>{nombre}</p>
            <p className={`precioCard${index + 1} precioCard`}>{precio}</p> 
        </Link> 
             
             
            
        
        
            
    )
}




