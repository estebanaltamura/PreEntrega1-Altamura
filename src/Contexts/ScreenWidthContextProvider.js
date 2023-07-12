import { useState, useEffect, createContext } from "react";

export const ScreenWidthContext = createContext(window.innerWidth)

export const ScreenWidthContextProvider = ({children})=>{

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)

    useEffect(()=>{
        const screenWidthChangeHandler = ()=>{
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", screenWidthChangeHandler)

        return ()=> window.removeEventListener("resize", screenWidthChangeHandler)
    },[])


    return(
        <ScreenWidthContext.Provider value={{ screenWidth }}>
            {children}
        </ScreenWidthContext.Provider>
    )
}