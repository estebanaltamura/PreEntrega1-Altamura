import { Form } from "./Form"
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { OrderItemListContainer } from "./OrderItemListContainer";
import Spinner from 'react-bootstrap/Spinner';
import "./CustomOrder.css"

export const CustomOrder = ()=>{

    const { itemsCartAdded } = useContext(CartContext)
    const { isLoading } = useContext(IsLoadingContext)

    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    },[])
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