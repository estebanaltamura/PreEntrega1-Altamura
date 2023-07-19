import { useContext } from "react"
import {Link} from "react-router-dom"
import { IsLoadingContext } from "../../../contexts/IsLoadingContextProvider"
import "./Collection1Title.css"

export const Collection1Title = ()=>{

  const { setIsLoading } = useContext(IsLoadingContext)

  const onClickLinkHandler = ()=>{
    setIsLoading(true)
  }

  return(
    <Link className="coleccionesTexto titulocoleccion1" to="/collections/Urban backpacks" onClick={onClickLinkHandler}>
      <h3 >Urban</h3>
    </Link>
  )
}