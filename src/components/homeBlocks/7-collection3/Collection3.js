import { useContext } from "react"
import {Link} from "react-router-dom"
import { IsLoadingContext } from "../../../contexts/IsLoadingContextProvider"
import "./Collection3.css"

export const Collection3 = ()=>{
  const { setIsLoading } = useContext(IsLoadingContext)

	const onClickLinkHandler = ()=>{
    setIsLoading(true)
  }

  return(
    <Link className="coleccionesImagenes imagencoleccion3 redondeado" to="/collections/Climbing backpacks" onClick={onClickLinkHandler}>
        <img className="coleccionesImagenes" loading="eager" src="https://i.postimg.cc/TYk324Dj/climbing-home.jpg" alt="imagen collecion 3" />
    </Link>
  )
}

 