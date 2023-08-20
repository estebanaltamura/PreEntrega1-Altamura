import { useContext } from "react"
import { CartContext } from "../contexts/CartContextProvider"

export const useRecoverDataCartFromLocalStorage = ()=>{
  const { dispatch } = useContext(CartContext)

	const recoverCartDataFromLocalStorage = ()=>{		
		if (localStorage.getItem("itemsCartAdded")){
			const cartData = localStorage.getItem("itemsCartAdded")            
			dispatch({type: "RECOVER_DATA", dataRecoveredFromLocalStorage: JSON.parse(cartData)})
			localStorage.removeItem("itemsCartAdded")
		}
	}	
    
  return({
	recoverCartDataFromLocalStorage  
	})
}