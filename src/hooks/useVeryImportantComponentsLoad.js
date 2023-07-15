export const useVeryImportantComponentsLoad = ()=>{
  
  const isVeryImportantComponent = (elementJustLoaded, veryImportantComponentsLoaded)=>{
    if(elementJustLoaded === "coleccionesImagenes"){
      return true
    } 
    else if(elementJustLoaded === "portadaMobile" ||  elementJustLoaded === "portada375" ||  elementJustLoaded === "portadaDesktop"){      
      if(veryImportantComponentsLoaded.some((element)=>element === "portadaMobile" ||  element === "portada375" ||  element === "portadaDesktop")){
        return false
      }
      else return true
    }  
    return false         		
  }

  const areAllVeryImportantComponentLoaded = (veryImportantComponentsLoaded)=>{    
    if(veryImportantComponentsLoaded.length === 4) return true
    else return false
  }  
    
  return({
    isVeryImportantComponent,
    areAllVeryImportantComponentLoaded       
  })
}