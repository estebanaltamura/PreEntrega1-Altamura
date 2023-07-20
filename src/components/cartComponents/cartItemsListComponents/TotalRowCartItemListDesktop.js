import "./TotalRowCartItemListDesktop.css"

export const TotalRowCartItemListDesktop = ({totalCart})=>{
  return(
    <div id="totalCart" className={window.innerWidth > 768 ? "totalCartContainer" : "totalCartContainerMobile"}> 
      <span className="totalCartTitle">TOTAL</span>
      <span className="totalCartNumber" id="totalCartNumber">{`$${totalCart}`}</span>
    </div>
  )
} 