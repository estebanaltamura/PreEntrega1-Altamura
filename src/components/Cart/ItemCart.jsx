import { useContext } from "react"
import { CartContext } from "../Contexts/CartContextProvider"

import "./ItemCart.css"

export const ItemCart = ({product})=> {

    const {itemsCartAdded, setItemsCartAdded} = useContext(CartContext)
    
    const indexOfProductToUpdate = (itemsCartAdded, e)=>{
        return itemsCartAdded.findIndex((product)=>product.id==e.target.parentNode.id)     
    }

    const onClickHandlerMoreQuantity = (e)=>{
        const itemsCartAddedUpdated = itemsCartAdded.map((product, index)=>{
            if (index == indexOfProductToUpdate(itemsCartAdded,e)){
                const quantityUpdated1 = {...product, quantity: product.quantity + 1}
                const quantityUpdated2 = { ...quantityUpdated1, subTotal: quantityUpdated1.quantity * product.price}
                return {...quantityUpdated2}
            }
            else return {...product} 
        })

        setItemsCartAdded(itemsCartAddedUpdated)
    }

    const onClickHandlerlessQuantity = (e)=>{        
        const itemsCartAddedUpdated1 = itemsCartAdded.map((product, index)=>{
            if (index == indexOfProductToUpdate(itemsCartAdded,e)){
                if (product.quantity >= 2){
                    const quantityUpdated1 = {...product, quantity: product.quantity - 1}
                    const quantityUpdated2 = { ...quantityUpdated1, subTotal: quantityUpdated1.quantity * product.price}                    
                    return {...quantityUpdated2}
                }
                else{return null}
            }
            else return {...product}
        })

        const itemsCartAddedUpdated2 = itemsCartAddedUpdated1.filter(producto=>{return producto !== null})        
        setItemsCartAdded(itemsCartAddedUpdated2)
    }

    const onClickHandlerRemove = (e)=>{        
        const itemsCartAddedUpdated = itemsCartAdded.filter((product, index)=>{
            return index !== indexOfProductToUpdate(itemsCartAdded, e) && product
        })
        setItemsCartAdded(itemsCartAddedUpdated)
    }

    return(

        <>
            {
                window.innerWidth > 768 ?
                    <div className="item" id={product.id}>
                        <img className="imagenCartItem" src={product.images[0]} />
                        <span className="tituloCartItem">{product.name}</span>
                        <span className="priceCartItem">{`$${product.price}`}</span>
                        <span className="quantityCartItem">{product.quantity}</span>
                        <img className="moreQuantityIcon" onClick={onClickHandlerMoreQuantity} id="moreQuantityIcon" src="https://i.postimg.cc/285Ct7K1/icons8-plus-48.png" />
                        <img className="lessQuantityIcon" onClick={onClickHandlerlessQuantity} id="lessQuantityIcon" src="https://i.postimg.cc/C5hwSGM6/icons8-minus-48.png" />
                        <span className="subTotalCartItem">{`$${product.subTotal}`}</span>
                        <img className="removeIcon" onClick={onClickHandlerRemove} id="removeIcon" src="https://i.postimg.cc/prsRTmpV/icons8-multiply-64.png" />
                    </div>
                                        :
                    <div className="itemMobile" id={product.id}>
                        <img className="imagenCartItem" src={product.images[0]} />
                        <span className="tituloCartItem">{product.name}</span>
                        <span className="subTituloCartItem">{product.shortDescription}</span>
                        <p className="descripcion"></p>                
                        <span className="quantityCartItem">{product.quantity}</span>
                        <img className="moreQuantityIcon" onClick={onClickHandlerMoreQuantity} id="moreQuantityIcon" src="https://i.postimg.cc/285Ct7K1/icons8-plus-48.png" />
                        <img className="lessQuantityIcon" onClick={onClickHandlerlessQuantity} id="lessQuantityIcon" src="https://i.postimg.cc/C5hwSGM6/icons8-minus-48.png" />
                        <span className="subTotalCartItem">{`$${product.subTotal}`}</span>
                        <span className="removeIconMobile" id="removeIcon" onClick={onClickHandlerRemove}>Eliminar</span>
                        <div className="line"></div>
                    </div>
            }        
        </>
    )
}


           