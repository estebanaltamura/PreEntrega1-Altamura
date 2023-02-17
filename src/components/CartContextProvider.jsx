import { createContext } from "react";


export const CartContext = createContext([])

export const CartContextProvider = ({children})=>{
    return (
        <CartContext.Provider value={{prop1:"culo"}}>
            {children}
        </CartContext.Provider>
    )
}