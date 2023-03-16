import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Contexts/CartContextProvider"
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
            
                            <Link className="botonesCarro botonesCarroConItems pagarConMPButton" to="/Payment">
                                <img src="https://i.postimg.cc/Xv5j8NDx/icono_mercadopago.png" className="mercadopagoicono" alt="" />
                                CONTINUE TO CHECKOUT
                            </Link>
            
                            <Link className="botonesCarro botonesCarroConItems" to="/home">CONTINUE SHOPPING</Link> 
                        </main>
                    </>

                                            :

                    <>
                        <main className="mainContainerCart">
                            <div className="emptyCartMessageAndButtonContainer">
                                <h2 className="emptyCartMessage">Your cart is currently empty</h2>
                                <Link className="botonesCarro botonesCarroSinItems" to="/home">CONTINUE SHOPPING</Link>                    
                            </div>
                        </main>
                    </>

            }       
        </>
    )
}