import { Link } from "react-router-dom";
import "./CollectionItem.css"

export const CollectionItem = ({image, name, price, id, index, collectionName })=>{ 
    
    return(
        <Link className={`card card${index+1}`} to={`/products/${collectionName}/${id}`}>
            <img className={`imagenCard${index + 1} imagenCard`} src={image} alt="foto"></img>
            <p className={`tituloCard${index + 1} tituloCard`}>{name}</p>
            <p className={`precioCard${index + 1} precioCard`}>{`$${price}`}</p> 
        </Link>            
    )
}






