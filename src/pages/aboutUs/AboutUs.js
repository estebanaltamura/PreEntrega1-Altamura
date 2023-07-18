import { useContext } from "react"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider"
import Spinner from '../../assets/spinner.gif';
import "./AboutUs.css"

export const AboutUs = ()=>{
  const { setIsLoading, isLoading } = useContext(IsLoadingContext)
 
  const onLoadHandler = ()=>{
    setIsLoading(false)
  }    

  return(
    <>
      <div className={isLoading === true ? "spinnerContainer" : "hidden"} >      
        <img src={Spinner} />           
      </div>      
          
      <main className={isLoading === false ? "mainNosotros" : "hidden"} onLoad={onLoadHandler}>
        <h2 className="tituloNosotros">About Us</h2>
        <p className="textoNosotros">We have been the best of friends for over ten years and have discovered a shared passion for creativity. We are very different but at the same time very similar. In the year 2020, after many days of sharing dreams and ideas, we made the decision to work together to pursue a common goal: PANDORA. In a moment of uncertainty, crisis and change, we put ourselves together, we put our brains to work and from that will came this small venture that we want to share with all of you.</p>
        <img className="imagenFundadores" src="https://i.postimg.cc/pXPmLj1v/aboutUs.jpg" alt="Imagen de una mujer y un hombre que son los fundadores de pandora. Estan sonriendo para la foto con una pared colorida de fondo" />
      </main>    
    </>
  )
}