import "./OrderItem.css"

export const OrderItem = ({product})=> {
    return (
        <>
            <div className="customOrderItem">
                <span className="customOrderQuantityTitle orderCustomSpan">Quantity</span>
                <span className="customOrderPriceTitle orderCustomSpan">Price</span>
                <span className="customOrderSubTotalTitle orderCustomSpan">Subtotal</span>
                <img className="customOrderImage" src={product.images[0]} />
                <span className="customOrderName orderCustomSpan">{product.name}</span>
                <span className="customOrderQuantity orderCustomSpan">{product.quantity}</span>
                <span className="customOrderPrice orderCustomSpan">{product.price}</span>
                <span className="customOrderSubTotal orderCustomSpan">{product.subTotal}</span>
            </div>

        </>
    )
}