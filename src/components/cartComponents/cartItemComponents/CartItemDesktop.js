import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContextProvider'
import deleteIcon from '../../../assets/deleteIcon.svg'
import moreQuantityCartIcon from '../../../assets/moreQuantityCartIcon.svg'
import lessQuantityCartIcon from '../../../assets/lessQuantityCartIcon.svg'
import "./CartItemDesktop.css"

export const CartItemDesktop = ({product})=>{ 
  const { dispatch } = useContext(CartContext)

  const removeItemClickHandler = (id)=>{  
    dispatch({type: "REMOVE_ITEM", id})
  }

  const moreQuantityClickHandler = (id)=>{
    dispatch({type: "ADD_ITEM", id})
  }

  const lessQuantityClickHandler = (id)=>{
    dispatch({type: "SUBTRACT_ITEM", id})
  }

  return(
    <div className="itemDesktop" id={product.id}>
      <img  className="imagenCartItem" src={product.images[0]} alt= "A model using a backpack backpack" />
      <span className="tituloCartItem">{product.name}</span>
      <span className="priceCartItemDesktop">{`$${product.price}`}</span>
      <span className="quantityCartItem">{product.quantity}</span>
      <img  className="moreQuantityIcon" src={moreQuantityCartIcon} alt= "button to increase quantity" onClick={()=>moreQuantityClickHandler(product.id)}/>
      <img  className="lessQuantityIcon" src={lessQuantityCartIcon} alt= "button to decrease quantity" onClick={()=>lessQuantityClickHandler(product.id)} />
      <span className="subTotalCartItem">{`$${product.subTotal}`}</span>
      <div className='removeItemCartContainer' onClick={()=>removeItemClickHandler(product.id)}>
        <img className='removeIcon' src={deleteIcon} alt="Remove item icon"/>
        <span className="removeText">Remove item</span>      
      </div>
    </div>
  )
}