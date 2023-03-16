import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = (props)=>{

    const [itemsCartAdded, setItemsCartAdded] = useState([])


    return (
        <CartContext.Provider value={{itemsCartAdded, setItemsCartAdded}}>
            {props.children}
        </CartContext.Provider>
    )
}