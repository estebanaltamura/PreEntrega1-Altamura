import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Contexts/CartContextProvider"
import { BsBank } from "react-icons/bs";
import "./CartItemsContainer.css"

import { ItemListCart } from "./ItemListCart"

export const CartItemsContainer = ()=>{

    const { itemsCartAdded } = useContext(CartContext)
   

    return(
        <>  
            {
                itemsCartAdded.length > 0 ?
                    <>  
                        <main className="mainContainerCart">
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
                                <Link className="botonesCarro customOrderButton" to="/home">
                                    
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
                            <div className="emptyCartMessageAndButtonContainer">
                                <h2>Your cart is currently empty</h2>
                                <Link className="botonesCarro" to="/home">CONTINUE SHOPPING</Link>                    
                            </div>
                        </main>
                    </>

            }       
        </>
    )
}