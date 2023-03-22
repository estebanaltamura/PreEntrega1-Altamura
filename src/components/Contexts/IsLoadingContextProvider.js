import { createContext, useState } from "react"

export const isLoadingContext = createContext()

export const IsLoadingContextProvider = ({children})=> {

    const [isLoading, setIsLoading] = useState()

    return(
        <isLoadingContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </isLoadingContext.Provider>
    )
}