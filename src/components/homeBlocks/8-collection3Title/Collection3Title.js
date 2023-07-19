import { useContext } from "react"
import {Link} from "react-router-dom"
import { IsLoadingContext } from "../../../contexts/IsLoadingContextProvider"
import "./Collection3Title.css"

export const Collection3Title = ()=>{

  const { setIsLoading } = useContext(IsLoadingContext)

  const onClickLinkHandler = ()=>{
    setIsLoading(true)
  }

  return(
    <Link className="coleccionesTexto titulocoleccion3"  to="/collections/Climbing backpacks" onClick={onClickLinkHandler}>
      <h3>Climbing</h3>
    </Link>
  )
} 