import { useRef } from "react"

export const useSyntheticMediaQuery = ()=>{

 
  const previousScreenWidthRef = useRef([])
    
  const wasTriggeredMediaQuery = (width)=>{
    if(previousScreenWidthRef.current.length < 2){
      previousScreenWidthRef.current.push(width)
    }
    else{
      previousScreenWidthRef.current[0] = previousScreenWidthRef.current[1]
      previousScreenWidthRef.current[1] = width
    }       

    const currentWidth  = previousScreenWidthRef.current[1]
    const lastWidth     = previousScreenWidthRef.current[0]    

    if(currentWidth  > 374 &&
       lastWidth     < 375){         
      return true
    }
    
    else if(currentWidth  < 375 &&
            lastWidth     > 374){       
      return true
    }
    
    else if(currentWidth  > 767 &&
            lastWidth     < 768){       
      return true
    }
   
    else if(currentWidth  < 768 &&
            lastWidth     > 767){           
      return true
   }      

   else return false
  }
    
       
     


    return({
      wasTriggeredMediaQuery
    })
}