import { useContext } from "react"
import {Link} from "react-router-dom"
import { IsLoadingContext } from "../../../contexts/IsLoadingContextProvider"
import "./Collection1.css"

export const Collection1 = ()=>{
  const { setIsLoading } = useContext(IsLoadingContext)

  const onClickLinkHandler = ()=>{
    setIsLoading(true)
  }

  return(                                                                    
    <Link className="coleccionesImagenes imagencoleccion1 redondeado" to="/collections/Urban backpacks" onClick={onClickLinkHandler}>
      <img className="coleccionesImagenes" loading="eager" src="https://i.postimg.cc/mgJZC1Vt/urban-home.jpg" alt="imagen collecion 1" />
    </Link>
  )
}   