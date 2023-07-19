import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext([])

const types = {
  ADD_TO_CART   : "ADD_TO_CART",
  ADD_ITEM      : "ADD_ITEM",
  SUBTRACT_ITEM : "SUBTRACT_ITEM",
  REMOVE_ITEM   : "REMOVE_ITEM",
  CLEAR_CART    : "CLEAR_CART",
  RECOVER_DATA  : "RECOVER_DATA"
}

const initialValue = []

const reducer = (cartItems, action)=>{

  const isItemRepeated = (id)=>{
    return cartItems.some(item=>String(item.id) === String(id))
  }

  const findIndexOfById = (id)=>{
    return cartItems.findIndex(item=>String(item.id) === String(id))
  }

  const removeItem = (index)=>{
    const cartItemsCopy = [...cartItems] 
    cartItemsCopy.splice(index, 1)    
    return cartItemsCopy
  }
  const addQuantity = (index)=>{
    const cartItemsCopy = [...cartItems] 
    const currentQuantity = cartItemsCopy[index].quantity
    cartItemsCopy[index] = {...cartItemsCopy[index], quantity: currentQuantity + 1, subTotal: cartItemsCopy[index].price * (currentQuantity + 1)}
    return cartItemsCopy
  }

  const subtractQuantity = (index)=>{
    const cartItemsCopy = [...cartItems] 
    if(cartItemsCopy[index].quantity > 1){
      const currentQuantity = cartItemsCopy[index].quantity
      cartItemsCopy[index] = {...cartItemsCopy[index], quantity: currentQuantity - 1, subTotal: cartItemsCopy[index].price * (currentQuantity - 1)}
      return cartItemsCopy
    }    
    else{      
      cartItemsCopy.splice(index, 1)
      return cartItemsCopy
    }
  }

  const addToCart = (index, quantity)=>{
    const cartItemsCopy = [...cartItems] 
    const currentQuantity = cartItemsCopy[index].quantity
    cartItemsCopy[index] = {...cartItemsCopy[index], quantity: currentQuantity + quantity, subTotal: cartItemsCopy[index].price * (currentQuantity + quantity)}
    return cartItemsCopy
  }

  switch(action.type){
    case types.ADD_TO_CART:
      const newItemToAdd  = {...action.item, quantity: action.quantity, subTotal: action.quantity * action.item.price}        
      return isItemRepeated(action.item.id) ? addToCart(findIndexOfById(action.item.id), action.quantity) : [...cartItems, newItemToAdd]
  
    case types.ADD_ITEM:    
      return addQuantity(findIndexOfById(action.id))
    
    case types.SUBTRACT_ITEM:    
      return subtractQuantity(findIndexOfById(action.id))
    
    case types.REMOVE_ITEM:
      return removeItem(findIndexOfById(action.id))
    
    case types.CLEAR_CART:
      return []
    case types.RECOVER_DATA:
      return action.dataRecoveredFromLocalStorage
    
    default: return []// ???
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