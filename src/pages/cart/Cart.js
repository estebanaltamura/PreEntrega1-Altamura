import { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartContextProvider"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { CartItemsList } from "../../components/cartComponents/cartItemsListComponents/CartItemsList";
import { PaymentOptions } from "../../components/cartComponents/paymentOptions/PaymentOptions";
import Spinner from '../../assets/spinner.gif';
import "./Cart.css"

export const Cart = ()=>{
  const { cartItems, dispatch  } = useContext(CartContext)
  const { isLoading, setIsLoading } = useContext(IsLoadingContext)
  const cartItemQuantityLoadedRef = useRef(0)   
  
  const cartItemLoadHandler = (e)=>{
    const classOfElementJustLoaded = e.target.classList[0]

    const areCartItemLoaded = (classOfElementJustLoaded)=>{
      if(cartItems.length > 0){
        if(classOfElementJustLoaded  === "imagenCartItem"){
          cartItemQuantityLoadedRef.current += 1
         }
        if(cartItemQuantityLoadedRef.current === cartItems.length){          
          setIsLoading(false)
          cartItemQuantityLoadedRef.current = 0
        }       
      }  
    }
    
    areCartItemLoaded(classOfElementJustLoaded)  
  }

  const onCLickContinueButtonHandler = ()=>{
    setIsLoading(true)
  }

  useEffect(()=>{       
    //cartItems.length === 0 && setIsLoading(false)
    
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })       
        //eslint-disable-next-line
  },[])

  return(
    <> 
      {         
        cartItems.length > 0  ?
          <>  
            <div className={isLoading === true ? "spinnerContainer" : "hidden"} > 
              <img src={Spinner} />        
            </div>      

            <main className={isLoading === true ? "hidden" : "mainContainerCart"} onLoad={cartItemLoadHandler}>              
              <div className="contenedorItems">
                <CartItemsList />
              </div>

              

              <PaymentOptions />
                                    
              <div className="lineCart"></div>
                
              <Link className="continueShoppingButton" to="/home" onClick={onCLickContinueButtonHandler}>CONTINUE SHOPPING</Link>                                 
            </main>
          </>

                            :                   

          <>            
            <main className="mainContainerCart" >
              <div className="paymentButtonsContainer">
                <h3>Your cart is currently empty</h3>
                <Link className="continueShoppingButton" to="/home" onClick={onCLickContinueButtonHandler}>CONTINUE SHOPPING</Link>                    
              </div>
            </main>
          </>
      }            
    </>
  )
}

