import { useEffect, useContext, useRef } from "react"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { ScreenWidthContext } from "../../contexts/ScreenWidthContextProvider";
import { useSyntheticMediaQueries } from "../../hooks/useSyntheticMediaQueries";
import { useVeryImportantComponentsLoad } from "../../hooks/useVeryImportantComponentsLoad";

import { CoverImage } from "../../components/homeBlocks/1-coverImage/CoverImage";
import { CollectionsTitle } from "../../components/homeBlocks/2-collectionsTitle/CollectionsTitle"
import { Collection1 } from "../../components/homeBlocks/3-collection1/Collection1"
import { Collection1Title } from "../../components/homeBlocks/4-collection1Title/Collection1Title"
import { Collection2 } from "../../components/homeBlocks/5-collection2/Collection2"
import { Collection2Title } from "../../components/homeBlocks/6-collection2Title/Collection2Title"
import { Collection3 } from "../../components/homeBlocks/7-collection3/Collection3"
import { Collection3Title } from "../../components/homeBlocks/8-collection3Title/Collection3Title"
import { WeParagraphTitle } from "../../components/homeBlocks/9-weParagraphTitle/WeParagraphTitle"
import { WeParagraph1 } from "../../components/homeBlocks/10-weParagraph1/WeParagraph1"
import { WeParagraph2 } from "../../components/homeBlocks/11-weParagraph2/WeParagraph2"
import { OurCommunityTitle } from "../../components/homeBlocks/12-ourCommunityTitle/OurCommunityTitle"
import { OurCommunityImage } from "../../components/homeBlocks/13-ourCommunityImage/OurCommunityImage"
import { FoundationImage } from "../../components/homeBlocks/14-foundationImage/FoundationImage"
import { FoundationParagraph1 } from "../../components/homeBlocks/15-foundationParagraph1/FoundationParagraph1";
import { FoundationParagraph2 } from "../../components/homeBlocks/16-foundationParagraph2/FoundationParagraph2";
import Spinner from '../../assets/spinner.gif';
import { Player } from '@lottiefiles/react-lottie-player';


import "./Home.css"

export const Home = ()=>{

  const { isLoading, setIsLoading } = useContext(IsLoadingContext)  
  const { screenWidth } = useContext(ScreenWidthContext)
  
  const { wasTriggeredMediaQuery,
          getCurrentAndLastWidth
        } = useSyntheticMediaQueries()  
  
  const { isVeryImportantComponent, 
          areAllVeryImportantComponentLoaded,
          removeCoverImageOfveryImportantComponentsLoadedRef                   
        } = useVeryImportantComponentsLoad()

  const currentAndLastWidthRef            = useRef([])
  const veryImportantComponentsLoadedRef  = useRef([])   
  
  useEffect(()=>{      
    setIsLoading(true)   
  },[])     
  
  useEffect(()=>{      
    isLoading === false && window.scrollTo(0, 0);   
  },[isLoading])     
  
  useEffect(()=>{
    // Set isLoading true when media query changes  
    const [ currentWidth, lastWidth ] = getCurrentAndLastWidth(currentAndLastWidthRef.current, screenWidth)      
    if(wasTriggeredMediaQuery(currentWidth, lastWidth) === true){
      veryImportantComponentsLoadedRef.current = [...removeCoverImageOfveryImportantComponentsLoadedRef(veryImportantComponentsLoadedRef.current)]      
      setIsLoading(true) 
    }          
  },[screenWidth])    

  const onLoadHandler = (e)=>{      
    // Set isLoading false when 4 very important components are loaded. Main cover image and 3 collection cover images 
    const elementJustLoaded = e.target.classList[0]    
    isVeryImportantComponent(elementJustLoaded, veryImportantComponentsLoadedRef.current) && veryImportantComponentsLoadedRef.current.push(elementJustLoaded)    
    areAllVeryImportantComponentLoaded(veryImportantComponentsLoadedRef.current) && setIsLoading(false)        
  }       
    
  return(
    <>             
      <div className="homeContainer">
        <div className={isLoading === true ? "spinnerContainer" : "hidden"} >      
          <img src={Spinner} />    
          {/* <Player
            autoplay   
            loop          
            speed= '2'         
            src="https://lottie.host/bc11eea0-68fb-4a16-8247-b1a418f3c5ed/OlFoga7EfH.json"
            style={{ height: '180px', width: '180px'}}
            >            
          </Player> */} 
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
    -Mediante un custom hook que consume el contexto ScreenWidth se detecta el paso por los media query lo que dispara:
      -isLoading true
      -remueve el componente de la portada que estaba cargada hasta recien del array de componentes importantes cargados. Modulo 2
    -Al completarse la carga de la portada isLoading se setea en false por el que el proceso tambien pasa por el modulo que setea isLoading false cuando los 4 VIC estan cargados. Modulo 1

  -Pendiente: el 10% / 20% de las veces que se refresca la home/entra por primera vez a la home con una pocision de scroll baja previa.
    -El useEffect que con isLoading === false scroll a top no funciona. De sub dominio a home anda perfecto

 
*/