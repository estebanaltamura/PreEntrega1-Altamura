import { createContext, useEffect, useReducer } from "react";
import { reducerHelper } from "../modules/reducerHelper";

export const CartContext = createContext([])

const types = Object.freeze({
  ADD_TO_CART   : "ADD_TO_CART",
  ADD_ITEM      : "ADD_ITEM",
  SUBTRACT_ITEM : "SUBTRACT_ITEM",
  REMOVE_ITEM   : "REMOVE_ITEM",
  CLEAR_CART    : "CLEAR_CART",
  RECOVER_DATA  : "RECOVER_DATA"
})

const initialValue = []

const reducer = (cartItems, action)=>{ 

  switch(action.type){
    case types.ADD_TO_CART:{
      const newItemToAdd  = {...action.item, quantity: action.quantity, subTotal: action.quantity * action.item.price}
      const id            = action.item.id  
      const index         = reducerHelper.findIndexOfById(cartItems, action.item.id)
      const quantity      = action.quantity       
      return reducerHelper.isItemRepeated(cartItems, id) ? reducerHelper.addToCart(cartItems, index, quantity) : [...cartItems, newItemToAdd]
    }
     
    case types.ADD_ITEM:{
      const index = reducerHelper.findIndexOfById(cartItems, action.id)        
      return reducerHelper.addQuantity(cartItems, index)
    }      
    
    case types.SUBTRACT_ITEM:{
      const index = reducerHelper.findIndexOfById(cartItems, action.id)
      return reducerHelper.subtractQuantity(cartItems, index)
    }      
    
    case types.REMOVE_ITEM:{
      const index = reducerHelper.findIndexOfById(cartItems, action.id)
      return reducerHelper.removeItem(cartItems, index)
    }      
    
    case types.CLEAR_CART:
      return []

    case types.RECOVER_DATA:
      return action.dataRecoveredFromLocalStorage
    
    default: return [...cartItems]
  }
}

export const CartContextProvider = (props)=>{

  const [ cartItems, dispatch ] = useReducer(reducer, initialValue)
  
  useEffect(()=>{
    cartItems.length > 0 && localStorage.setItem("itemsCartAdded", JSON.stringify(cartItems))
  },[cartItems])

  return (
    <CartContext.Provider value={ { cartItems, dispatch } }>
      {props.children}
    </CartContext.Provider>
  ) 
}