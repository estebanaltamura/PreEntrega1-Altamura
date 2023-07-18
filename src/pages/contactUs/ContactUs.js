import { useContext, useEffect } from "react"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider"
import "./ContactUs.css"


export const ContactUs = ()=>{    
  const { setIsLoading } = useContext(IsLoadingContext)
    
  useEffect(()=>{
    const onLoadHandler = ()=>{
      setIsLoading(false)
    }

    window.addEventListener("load", onLoadHandler)
    return ()=> window.removeEventListener("load", onLoadHandler)
  },[])


  return(
    <main className="contactUsmainContainer">
      <div className="contactUsContainer">
        <h2 className="tituloContacto">Contact Us</h2>
        <p className="textoContacto1">Please feel free to call, email or text me with any comments, questions, suggestions or concerns</p>
        <p className="textoContacto2">Telephone: +549 111 9503 777</p>
        <p className="textoContacto3">Email: esteban.altamura@gmail.com</p>
        <p className="textoContacto4">Twitter: https://twitter.com/mura_andy_</p>
      </div>
    </main>
  )
}