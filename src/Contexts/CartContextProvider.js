import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export const CartContextProvider = (props)=>{

    const [itemsCartAdded, setItemsCartAdded] = useState([])

    useEffect(()=>{
        itemsCartAdded.length > 0 && localStorage.setItem("itemsCartAdded", JSON.stringify(itemsCartAdded))
    },[itemsCartAdded])


    return (
        <CartContext.Provider value={{itemsCartAdded, setItemsCartAdded}}>
            {props.children}
        </CartContext.Provider>
    )
}