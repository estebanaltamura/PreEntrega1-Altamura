import { Form } from "./Form"
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContextProvider";
import { isLoadingContext } from "../Contexts/IsLoadingContextProvider";
import { OrderItemListContainer } from "./OrderItemListContainer";
import Spinner from 'react-bootstrap/Spinner';
import "./CustomOrder.css"

export const CustomOrder = ()=>{

    const { itemsCartAdded } = useContext(CartContext)
    const { isLoading } = useContext(isLoadingContext)

    return(
        <div className="mainContainerCustomOrder">

            <>
                {
                    isLoading ?
                        <div className="spinnerContainer" >
                            <Spinner animation="border" role="status" className="spinner">
                            </Spinner> 
                        </div> 
                    :
                    <>
                        <Form />
                        {itemsCartAdded.length > 0 && <OrderItemListContainer />}       
                    </>
                }
            </>
                
        </div>

    )
}