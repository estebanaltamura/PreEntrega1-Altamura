import { useContext } from "react"
import { ScreenWidthContext } from "../../../contexts/ScreenWidthContextProvider";
import { CartItemDesktop } from './CartItemDesktop'
import { CartItemMobile } from './CartItemMobile'

export const CartItem = ({product})=> {  
  const { screenWidth }   = useContext(ScreenWidthContext)   

  return(           
    <> 
      { 
        screenWidth > 768 ?       

          <CartItemDesktop product={product}/>
                          :
          <CartItemMobile product={product}/>
      }
    </>   
  )
}           