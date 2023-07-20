import "./HeaderRowCartItemListDesktop.css"

export const HeaderRowCartItemListDesktop = ()=>{
  return(
    <div className="itemHeader" id="itemHeader">
      <span className="productNameHeaderCart">Product</span>
      <span className="priceHeaderCart">Price</span>
      <span className="quantityHeaderCart">Quantity</span>
      <span className="subTotalHeaderCart">Sub Total</span>
    </div>   
  )
}