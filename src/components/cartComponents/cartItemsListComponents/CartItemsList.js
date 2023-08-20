import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../contexts/CartContextProvider"
import { ScreenWidthContext } from "../../../contexts/ScreenWidthContextProvider";
import { HeaderRowCartItemListDesktop } from "./HeaderRowCartItemListDesktop";
import { CartItem } from '../cartItemComponents/CartItem'
import { TotalRowCartItemList } from "./TotalRowCartItemList";

export const CartItemsList = ()=> {
  const { cartItems }       = useContext(CartContext)
  const { screenWidth }     = useContext(ScreenWidthContext)
  const [ totalCart, setTotalCart ] = useState([])  

  useEffect(()=>{    
    if (cartItems.length ===  0){
      setTotalCart(0)
    } 
    else{
      const cartItemsSubTotalByProduct = cartItems.map(item=>item.price * item.quantity)
      const subTotal = cartItemsSubTotalByProduct.reduce((accumulator, currentValue)=>accumulator + currentValue)
      setTotalCart(subTotal)
    }
  },[cartItems])

  return(
    <>
      { 
        screenWidth > 768 &&
          <HeaderRowCartItemListDesktop />                    
      }
            
      {
        cartItems.map((product, index)=>{
          return <CartItem product={product} index={index} key={index}/>
        })
      }           
            
      <TotalRowCartItemList totalCart={totalCart}/>             
    </>
  )
}