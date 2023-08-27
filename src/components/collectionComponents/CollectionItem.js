import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import "./CollectionItem.css"

export const CollectionItem = ({image, name, price, id, index, collectionName })=>{
  const { setIsLoading } = useContext(IsLoadingContext)
  const history = useNavigate()

  const cardClickHandler = ()=>{
    setIsLoading(true)
    history(`/products/${collectionName}/${id}`)
  }

  return(
    <div className={`card card${index+1}`} onClick={cardClickHandler}>
      <img className={`imagenCard${index + 1} imagenCard`} src={image} alt="item"></img>
      <div className="infoCardContainer">
        <p className={`tituloCard${index + 1} tituloCard`}>{name}</p>
        <div className="precioContainer">
          <p className={`precioCard${index + 1} precioCard`}>{`u$d ${price}`}</p> 
        </div>        
      </div>      
    </div>            
  )
}