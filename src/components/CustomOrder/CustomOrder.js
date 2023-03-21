import { Form } from "./Form"
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContextProvider";
import { OrderItemListContainer } from "./OrderItemListContainer";
import "./CustomOrder.css"

export const CustomOrder = ()=>{

    const { itemsCartAdded } = useContext(CartContext)


    return(
        <div className="mainContainerCustomOrder">
            <Form />
            {itemsCartAdded.length > 0 && <OrderItemListContainer />}
                        
                
        </div>

    )
}