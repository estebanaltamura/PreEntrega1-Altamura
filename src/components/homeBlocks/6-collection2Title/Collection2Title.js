import { useContext } from "react"
import {Link} from "react-router-dom"
import { IsLoadingContext } from "../../../contexts/IsLoadingContextProvider"
import "./Collection2Title.css"

export const Collection2Title = ()=>{

  const { setIsLoading } = useContext(IsLoadingContext)

  const onClickLinkHandler = ()=>{
    setIsLoading(true)
  }

  return(
    <Link className="coleccionesTexto titulocoleccion2" to="/collections/Travel backpacks" onClick={onClickLinkHandler}>
      <h3 >Travel</h3>
    </Link>
  )
} 