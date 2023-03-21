import "./CustomOrderItemListHeader.css"


export const CustomOrderItemListHeader = ()=> {
    return(
        <>
            <div className="customOrderItemHeader">
                
                <span className="customOrderNameHeader">Product</span>
                <span className="customOrderQuantityHeader">Quantity</span>
                <span className="customOrderPriceHeader">Price</span>
                <span className="customOrderSubTotalHeader">Subtotal</span>
            </div> 

        </>
    )
}