import { useEffect, useContext, useRef } from "react"
import { isLoadingContext } from "../../Contexts/IsLoadingContextProvider"
import { CoverImage } from "../HomeBlocks/1-CoverImage/CoverImage"
import { CollectionsTitle } from "../HomeBlocks/2-CollectionsTitle/CollectionsTitle"
import { Collection1 } from "../HomeBlocks/3-Collection1/Collection1"
import { Collection1Title } from "../HomeBlocks/4-Collection1Title/Collection1Title"
import { Collection2 } from "../HomeBlocks/5-Collection2/Collection2"
import { Collection2Title } from "../HomeBlocks/6-Collection2Title/Collection2Title"
import { Collection3 } from "../HomeBlocks/7-Collection3/Collection3"
import { Collection3Title } from "../HomeBlocks/8-Collection3Title/Collection3Title"
import { WeParagraphTitle } from "../HomeBlocks/9-WeParagraphTitle/WeParagraphTitle"
import { WeParagraph1 } from "../HomeBlocks/10-WeParagraph1/WeParagraph1"
import { WeParagraph2 } from "../HomeBlocks/11-WeParagraph2/WeParagraph2"
import { OurCommunityTitle } from "../HomeBlocks/12-OurCommunityTitle/OurCommunityTitle"
import { OurCommunityImage } from "../HomeBlocks/13-OurCommunityImage/OurCommunityImage"
import { FoundationImage } from "../HomeBlocks/14-FoundationImage/FoundationImage"
import { FoundationParagraph1 } from "../HomeBlocks/15-FoundationParagraph1/FoundationParagraph1"
import { FoundationParagraph2 } from "../HomeBlocks/16-FoundationParagraph2/FoundationParagraph2"
import Spinner from 'react-bootstrap/Spinner';
import "./HomeContainer.css"

export const HomeContainer = ()=>{

    const { isLoading, setIsLoading } = useContext(isLoadingContext)
    const mainContainer = useRef()
    const spinner = useRef()
    const componentsLoaded = useRef([])

    useEffect(()=>{
        setIsLoading(true)
        window.scrollTo(0,0)   
    }, [])

  
    useEffect(()=>{
        isLoading === false && mainContainer.current.classList.replace("hiddenHome", "mainContainer")
        isLoading === false && spinner.current.classList.replace("spinnerContainer", "hidden")
    }, [isLoading])

    const onLoadHandler = (e)=>{
        componentsLoaded.current.push(e.target.classList[0])
        const componentsLoadedFiltered = componentsLoaded.current.filter(element=>element == "coleccionesImagenes" || element == "portadaMobile" || element == "portada375" || element == "portadaDesktop")
        if(componentsLoadedFiltered.length == 4 && isLoading == true){
            console.log("cargaron los 4")
            setIsLoading(false)
        } 
        
    }
               



    return(
        <>
        
                <div ref={spinner} className="spinnerContainer" >
                            <Spinner animation="border" role="status" className="spinner">
                            </Spinner> 
                </div>

            
                
                <div ref={mainContainer} className="hiddenHome" onLoad={onLoadHandler}>
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
            
        </>
    ) 
} 