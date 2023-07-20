const isItemRepeated = (cartItems, id)=>{
  return cartItems.some(item=>String(item.id) === String(id))
} 

const findIndexOfById = (cartItems, id)=>{
  return cartItems.findIndex(item=>String(item.id) === String(id))
}

const addQuantity = (cartItems, index)=>{
  const cartItemsCopy = [...cartItems] 
  const currentQuantity = cartItemsCopy[index].quantity
  cartItemsCopy[index] = {...cartItemsCopy[index], quantity: currentQuantity + 1, subTotal: cartItemsCopy[index].price * (currentQuantity + 1)}
  return cartItemsCopy
}

const subtractQuantity = (cartItems, index)=>{
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

const removeItem = (cartItems, index)=>{
  const cartItemsCopy = [...cartItems] 
  cartItemsCopy.splice(index, 1)    
  return cartItemsCopy
}

const addToCart = (cartItems, index, quantity)=>{
  const cartItemsCopy = [...cartItems] 
  const currentQuantity = cartItemsCopy[index].quantity
  cartItemsCopy[index] = {...cartItemsCopy[index], quantity: currentQuantity + quantity, subTotal: cartItemsCopy[index].price * (currentQuantity + quantity)}
  return cartItemsCopy
}


export const reducerHelper = {
  "isItemRepeated"    : isItemRepeated,
  "findIndexOfById"   : findIndexOfById,
  "removeItem"        : removeItem,
  "addQuantity"       : addQuantity,
  "subtractQuantity"  : subtractQuantity,
  "addToCart"         : addToCart
}

  

  