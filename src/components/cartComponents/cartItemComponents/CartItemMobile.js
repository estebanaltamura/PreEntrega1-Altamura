import "./CartItemMobile.css"

export const CartItemMobile = ({product})=>{
  return(
    <div className="itemMobile" id={product.id}>
      <img  className="imagenCartItem" src={product.images[0]} alt= "A model using a backpack backpack" />
      <span className="tituloCartItem">{product.name}</span>
      <span className="subTituloCartItem">{product.shortDescription}</span>
      <p    className="descripcion"></p>                
      <span className="quantityCartItem">{product.quantity}</span>
      <img  className="moreQuantityIcon" id="moreQuantityIcon" src="https://i.postimg.cc/285Ct7K1/icons8-plus-48.png" alt= "button to increase quantity" />
      <img  className="lessQuantityIcon"  id="lessQuantityIcon" src="https://i.postimg.cc/C5hwSGM6/icons8-minus-48.png" alt= "button to decrease quantity" />
      <span className="subTotalCartItem">{`$${product.subTotal}`}</span>
      <span className="removeIconMobile" id="removeIcon"  alt= "button to remove item" >Eliminar</span>
      <div  className="lineCartItemMobile"></div>
    </div>
  )
}