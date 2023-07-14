import { useEffect, useContext, useRef } from "react"
import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider";
import { ScreenWidthContext } from "../../Contexts/ScreenWidthContextProvider";
import { useSyntheticMediaQuery } from "../../hooks/useSyntheticMediaQuery";
import { useVeryImportantComponentsLoad } from "../../hooks/useVeryImportantComponentsLoad";
import { CoverImage } from "../../components/HomeBlocks/1-CoverImage/CoverImage";
import { CollectionsTitle } from "../../components/HomeBlocks/2-CollectionsTitle/CollectionsTitle"
import { Collection1 } from "../../components/HomeBlocks/3-Collection1/Collection1"
import { Collection1Title } from "../../components/HomeBlocks/4-Collection1Title/Collection1Title"
import { Collection2 } from "../../components/HomeBlocks/5-Collection2/Collection2"
import { Collection2Title } from "../../components/HomeBlocks/6-Collection2Title/Collection2Title"
import { Collection3 } from "../../components/HomeBlocks/7-Collection3/Collection3"
import { Collection3Title } from "../../components/HomeBlocks/8-Collection3Title/Collection3Title"
import { WeParagraphTitle } from "../../components/HomeBlocks/9-WeParagraphTitle/WeParagraphTitle"
import { WeParagraph1 } from "../../components/HomeBlocks/10-WeParagraph1/WeParagraph1"
import { WeParagraph2 } from "../../components/HomeBlocks/11-WeParagraph2/WeParagraph2"
import { OurCommunityTitle } from "../../components/HomeBlocks/12-OurCommunityTitle/OurCommunityTitle"
import { OurCommunityImage } from "../../components/HomeBlocks/13-OurCommunityImage/OurCommunityImage"
import { FoundationImage } from "../../components/HomeBlocks/14-FoundationImage/FoundationImage"
import { FoundationParagraph1 } from "../../components/HomeBlocks/15-FoundationParagraph1/FoundationParagraph1"
import { FoundationParagraph2 } from "../../components/HomeBlocks/16-FoundationParagraph2/FoundationParagraph2"
import { Ellipsis } from 'react-spinners-css';
import "./Home.css"

export const Home = ()=>{

  const { isLoading, setIsLoading } = useContext(IsLoadingContext)  
  const { screenWidth } = useContext(ScreenWidthContext)
  const { wasTriggeredMediaQuery } = useSyntheticMediaQuery()  
  const { isVeryImportantComponent, 
          isAllVeryImportantComponentLoaded,
          getCurrentAndLastWidth          
         } = useVeryImportantComponentsLoad()

  const currentAndLastWidthRef            = useRef([])
  const veryImportantComponentsLoadedRef  = useRef([])     
  
  useEffect(()=>{
    // Cover image charge when media query changes
    const [ currentWidth, lastWidth ] = getCurrentAndLastWidth(currentAndLastWidthRef.current, screenWidth)      
    wasTriggeredMediaQuery(currentWidth, lastWidth) === true && setIsLoading(true)    
  },[screenWidth])    

  const onLoadHandler = (e)=>{    
    // Set isLoading false when 4 very important components are loaded. Main cover image and 3 collection cover images 
    const elementJustLoaded = e.target.classList[0]  
    isVeryImportantComponent(elementJustLoaded, veryImportantComponentsLoadedRef.current) && veryImportantComponentsLoadedRef.current.push(elementJustLoaded)    
    isAllVeryImportantComponentLoaded(veryImportantComponentsLoadedRef.current) && setIsLoading(false)        
  }
    
  return(
    <>             
      <div className="homeContainer">
        <div className={isLoading === true ? "spinnerContainer" : "hidden"} >
          <Ellipsis animation="border" role="status" className="spinner" color="#5c5c5c" size={70}></Ellipsis> 
        </div>     

        <div className={isLoading === false ? "homeGrid" : "hidden"} onLoad={onLoadHandler} >
          <CoverImage />
          <CollectionsTitle  />
          <Collection1  /> 
          <Collection1Title  /> 
          <Collection2 /> 
          <Collection2Title /> 
          <Collection3 /> 
          <Collection3Title /> 
          <WeParagraphTitle /> 
          <WeParagraph1 /> 
          <WeParagraph2 /> 
          <OurCommunityTitle /> 
          <OurCommunityImage /> 
          <FoundationImage /> 
          <FoundationParagraph1 /> 
          <FoundationParagraph2 />            
        </div>        
      </div>             
    </>
  ) 
} 

/*
Logica carga de imagenes de home:

  Aclaraciones:
  -Existe un contexto global isLoading
  -veryImportantComponents: La imagen de portada mas las 3 imagenes de portada de las colecciones (VIC)
  -Modulo 1 gestiona la carga de los very important components: Cuando los 4 VIC estan cargados isLoading false
  -Modulo 2 gestiona los media queries: Cuando el usuario pasa por un media query isLoading true 
    (que luego de la carga de la nueva portada, por el modulo que gestiona la carga de los VIC isLoading false)


  -En el evento onLoad del contenedor de home se busca detectar cuando estan completamente cargados los 4 VIC lo que desencadena en isLoading false. Modulo 1
  -Se uso siempre onLoad en las imagenes y no en los contenedores 
  -En todas las pantallas se busca:
    -Primero el header este disponible desde el DOMcontentload con un spinner para la espera del contenido en main
    -Segundo que el primer plano visible el usuario lo vea completo, sin cargas parciales, ni desorden en el layout
  
  -Primera carga:
    -El contexto isLoading su valor inicial es true
    -isLoading false al completarse la carga de los 4 VIC. Modulo 1

  -Carga viniendo desde un sub dominio:
    -No cambia isLoading a true ya que no es necesario. Las imagenes estan en cache.
  
  -Cambios en el ancho despues de la primer carga
    -Partiendo de que para el ancho original todas las imagenes estan en cache solo se tiene que adaptar el VIC portada cuando se pasa por el media query 375 y 768. 
    -Mediante un custom hoom que consume el contexto ScreenWidth se detecta el paso por los media query lo que dispara isLoading true. Modulo 2
    -Al completarse la carga de la portada isLoading se setea en false por el que el proceso tambien pasa por el modulo que setea isLoading false cuando los 4 VIC estan cargados. Modulo 1

*/