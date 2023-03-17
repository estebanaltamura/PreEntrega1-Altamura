import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../Contexts/CartContextProvider"
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";
import "./ItemDetails.css"



export const ItemDetails = ({name, price, images, description, productData})=>{
  
  const history = useNavigate()
  const {itemsCartAdded, setItemsCartAdded} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  
  const onClickATChandler = ()=>{    
    //buscar repetidos
    const indexOfRepeatedProduct = (itemsCartAdded)=>{
        return itemsCartAdded.findIndex((producto)=>producto.id==productData.id)     
    }

    //Si hay articulos en el carro evaluar si el nuevo es repetido
    if (itemsCartAdded.length == 0){
      productData.quantity = quantity
      productData.subTotal = productData.price * productData.quantity
      setItemsCartAdded([productData, ...itemsCartAdded])
    }

    if (itemsCartAdded.length > 0){
      if (indexOfRepeatedProduct(itemsCartAdded) == -1){
        productData.quantity = quantity
        productData.subTotal = productData.price * productData.quantity
        setItemsCartAdded([productData, ...itemsCartAdded])
      }
      
      else{
        const itemsCartAddedUpdated = itemsCartAdded.map((product, index)=>{
          if (index == indexOfRepeatedProduct(itemsCartAdded)){
            const repeatedProductUpdate1 = {...product, quantity: product.quantity + quantity}
            const repeatedProductUpdate2 = { ...repeatedProductUpdate1, subTotal: product.price * repeatedProductUpdate1.quantity}
            return {...repeatedProductUpdate2}
          }
          else return {...product} 
        })
        
        setItemsCartAdded(itemsCartAddedUpdated)
      }
    }

    history("/cart")
  }
  
    return(
        <>
        <div id="carouselExampleControls" className="carrusel carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {
                images.length > 0 && images.map((image, index)=>{
                  return (index == 0 ?
                  <div className="carousel-item active" key={index}>
                    <img id="carrousel1" src={image} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
                  </div>
                  :
                  <div className="carousel-item" key={index}>
                    <img id="carrousel1" src={image} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
                  </div>)
                })
              }

              <div className="carousel-item">
                <img src={images[1]} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
              </div>
              <div className="carousel-item">
                <img src={images[2]} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <img src="https://i.postimg.cc/RFzMbrkm/icons8-chevron-left-96.png" className="carousel-control-prev-icon" aria-hidden="true" alt="Boton para retroceder a la imagen anterior" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <img src="https://i.postimg.cc/ZRFJG7md/icons8-chevron-right-96.png" className="carousel-control-next-icon" alt="Boton para retroceder a la imagen siguiente" />
                <span className="visually-hidden">Next</span>
              </button>
        </div>

        
        <h2 className="titulo" id="tituloProducto">{name}</h2>
        <h3 className="precio" id="precioProducto">{`$${price}`}</h3>
        <img className="reviews" src="https://i.postimg.cc/hjgB1LmP/reviews.jpg" alt="Imagen que muestra las reviews hechas por los usuarios" />
        <img className="noPesticidas" src="https://i.postimg.cc/kg09B3XS/noPesticidas.jpg" alt="Imagen que muestra que nuestra marca no usa pesticidas y requiere menos uso de agua que lo " />
        <div className="quantityInputContainer">
            <div className="quantityInputGrid">
                <AiOutlineMinusSquare className="quantityModifiers" onClick={()=>quantity > 1 && setQuantity(quantity-1)}/>
                <span>{quantity}</span>
                <AiOutlinePlusSquare className="quantityModifiers" onClick={()=>setQuantity(quantity+1)}/>
            </div>
        </div>
        <button  className="botonATC" onClick={onClickATChandler}>Agregar al carrito</button>
        <button className="botonComprar">Comprar</button>
        <h3 className="tituloDescripcion">Descripcion</h3>
        <p className="descripcion">{description}</p>
        </>
    )
}