import { useContext } from "react"
import {Link} from "react-router-dom"
import { IsLoadingContext } from "../../../contexts/IsLoadingContextProvider"
import "./Collection2.css"

export const Collection2 = ()=>{

  const { setIsLoading } = useContext(IsLoadingContext)

  const onClickLinkHandler = ()=>{
    setIsLoading(true)
  }

  return(
    <Link className="coleccionesImagenes imagencoleccion2 redondeado" to="/collections/Travel backpacks" onClick={onClickLinkHandler}>
      <img className="coleccionesImagenes" loading="eager" src="https://i.postimg.cc/FH7sYVyM/travel-home.jpg" alt="imagen collecion 2" />
    </Link>
  ) 
}