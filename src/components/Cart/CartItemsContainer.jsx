import { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Contexts/CartContextProvider"
import { isLoadingContext } from "../Contexts/IsLoadingContextProvider"
import "./CartItemsContainer.css"

import { ItemListCart } from "./ItemListCart"

export const CartItemsContainer = ()=>{

    const { itemsCartAdded } = useContext(CartContext)
    const { isLoading, setIsLoading } = useContext(isLoadingContext)
    const mainContainerCart = useRef()
   
    useEffect(()=>{
        setIsLoading(true)
        window.scrollTo(0, 0)        
    },[])

    useEffect(()=>{
        (!isLoading && itemsCartAdded.length > 0) && mainContainerCart.current.classList.replace("hidden", "mainContainerCart")        
    },[isLoading])

    return(
        <>  
            {
                itemsCartAdded.length > 0 ?
                    <>  
                        <main ref={mainContainerCart} className="hidden">
                            <div className="contenedorItems redondeado">
                                <ItemListCart />
                            </div>

                            <div className="paymentButtonsContainer">                                
                                <h4>Credit card payments</h4>
                                <Link className="botonesCarro MPButton" to="/Payment">
                                    <img src="https://i.postimg.cc/Xv5j8NDx/icono_mercadopago.png" className="mercadopagoicono" alt="" />
                                    CONTINUE TO CHECKOUT
                                </Link>

                                <h4>Bank transfer payment method</h4>
                                <Link className="botonesCarro customOrderButton" to="/customOrder">                                    
                                    CREATE CUSTOM ORDER
                                </Link>

                                <div className="line"></div>
                
                                <Link className="botonesCarro" to="/home">CONTINUE SHOPPING</Link>                                 
                            </div>
                        </main>
                    </>

                                            :

                    <>
                        <main className="mainContainerCart">
                            <div className="paymentButtonsContainer">
                                <h3>Your cart is currently empty</h3>
                                <Link className="botonesCarro" to="/home">CONTINUE SHOPPING</Link>                    
                            </div>
                        </main>
                    </>

            }       
        </>
    )
}