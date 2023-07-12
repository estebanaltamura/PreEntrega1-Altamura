
import { Link, useParams } from "react-router-dom";
import "./Item.css"


export const Item = ({image, name, price, id, index})=>{     

    const {idCollection} = useParams()   

    
    
    return(
        <Link className={`card card${index+1}`} to={`/products/${idCollection}/${id}`}>
            <img className={`imagenCard${index + 1} imagenCard`} src={image} alt="foto" onLoad={()=>console.log(index + 1, "cargo")}></img>
            <p className={`tituloCard${index + 1} tituloCard`}>{name}</p>
            <p className={`precioCard${index + 1} precioCard`}>{`$${price}`}</p> 
        </Link>            
    )
}




