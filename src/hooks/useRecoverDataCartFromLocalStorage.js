import { useContext } from "react"
import { CartContext } from "../Contexts/CartContextProvider"


export const useRecoverDataCartFromLocalStorage = ()=>{

  const { setItemsCartAdded } = useContext(CartContext)

	const recoverCartDataFromLocalStorage = ()=>{
		console.log("recupero")
		if (localStorage.getItem("itemsCartAdded")){
			const cartData = localStorage.getItem("itemsCartAdded")
			setItemsCartAdded(JSON.parse(cartData))
			localStorage.removeItem("itemsCartAdded")
		}
	}	
    
  return({
	recoverCartDataFromLocalStorage  
	})
}