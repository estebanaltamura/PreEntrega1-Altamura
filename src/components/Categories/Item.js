import { Link } from "react-router-dom";
import "./Item.css"


export const Item = ({image, name, price, id, index})=>{     
    return(
        <Link className={`card card${index+1}`} to={`/products/${id}`}>
            <img className={`imagenCard${index + 1} imagenCard`} src={image} alt="foto"></img>
            <p className={`tituloCard${index + 1} tituloCard`}>{name}</p>
            <p className={`precioCard${index + 1} precioCard`}>{price}</p> 
        </Link> 
             
             
            
        
        
            
    )
}




