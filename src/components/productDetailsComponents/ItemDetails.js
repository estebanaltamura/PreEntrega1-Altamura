import { useNavigate } from "react-router-dom"
import { useContext, useState, useRef, useEffect } from "react"
import { CartContext } from "../../contexts/CartContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";
import "./ItemDetails.css"

export const ItemDetails = ({name, price, images, description, productData})=>{
  
  const { dispatch}       = useContext(CartContext)
  const { setIsLoading }  = useContext(IsLoadingContext)

  const [quantity, setQuantity] = useState(1)

  const history = useNavigate()
  const nextButtonCarrousel = useRef()
  

  useEffect(()=>{
    const interval = setTimeout(()=>nextButtonCarrousel.current.click(), 2500)
    
    return ()=> clearTimeout(interval)    
  },[])

  const onClickATChandler = ()=>{

    setIsLoading(true)

    dispatch({
      type: "ADD_TO_CART",
      item: {...productData},
      quantity: quantity
    })    
    history("/cart")
  }

  const onClickBINhandler = ()=>{
    setIsLoading(true)
    
    dispatch({
      type: "ADD_TO_CART",
      item: {...productData},
      quantity: quantity
    })    
    history("/cart")
  }

  
  
  return(
    <>
      <div id="carouselExampleControls" className="carrusel carousel slide" data-bs-ride="carousel">
          
        <div className="carousel-inner">
          {
            images.map((image, index)=>{
              return (index === 0   ?
                <div className="carousel-item active" key={index}>
                    <img id="carrousel1" src={image} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
                </div>
                                    :
                <div className="carousel-item" key={index}>
                  <img id="carrousel1" src={image} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
                </div>)
            })
          }              
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <img src="https://i.postimg.cc/RFzMbrkm/icons8-chevron-left-96.png" className="carousel-control-prev-icon" aria-hidden="true" alt="Boton para retroceder a la imagen anterior" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button ref={nextButtonCarrousel} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
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
      <button className="botonATC" onClick={onClickATChandler}>Add to Cart</button>        
      <button className="botonComprar" onClick={onClickBINhandler} >Buy it Now</button>
        
        
      <h3 className="tituloDescripcion">Descripcion</h3>
      <p className="descripcion">{description}</p>
        </>
    )
}