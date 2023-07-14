import { useEffect } from "react"


export const PortadaMobile = ()=>{

    useEffect(()=>{
        console.log("DOMCONTENTLOG portada mobile")
    },[])
    return(
        <img className="portadaMobile" loading="eager" src="https://i.postimg.cc/W3nPWdmm/portada-mobile.jpg" alt="imagen chica" />
    )
} 