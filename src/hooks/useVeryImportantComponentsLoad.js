import { useRef } from "react"

export const useVeryImportantComponentsLoad = ()=>{

	const componentsLoaded = useRef([])  

	const isLoadedVeryImportantComponents = (elementJustLoaded)=>{
		if(elementJustLoaded === "coleccionesImagenes"){      
			componentsLoaded.current.push(elementJustLoaded)      
		}
		else if(elementJustLoaded === "portadaMobile" ||  elementJustLoaded === "portada375" ||  elementJustLoaded === "portadaDesktop"){      
			
			if(componentsLoaded.current.findIndex((element)=>element === "portadaMobile" ||  element === "portada375" ||  element === "portadaDesktop") === -1){        
				componentsLoaded.current.push(elementJustLoaded)
			}
			else{
				const portadaIndex = componentsLoaded.current.findIndex((element)=>element === "portadaMobile" ||  element === "portada375" ||  element === "portadaDesktop") 
				componentsLoaded.current[portadaIndex] = elementJustLoaded
			} 
		}       
	 
		if(componentsLoaded.current.length === 4){         
			return true
		}        
		else return false
	}
	




  return({
		isLoadedVeryImportantComponents
  })
}