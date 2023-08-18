import { useNavigate } from "react-router-dom"
import { useContext, useState, useRef, useEffect } from "react"
import { CartContext } from "../../contexts/CartContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";
import ecologyBanner from '../../assets/ecologyBanner.svg'
import star1 from '../../assets/star1.svg' 
import star2 from '../../assets/star2.svg' 
import star3 from '../../assets/star3.svg' 
import star4 from '../../assets/star4.svg' 
import star5 from '../../assets/star5.svg' 
import lessQuantity from '../../assets/lessQuantity.svg'
import moreQuantity from '../../assets/moreQuantity.svg'
import "./ProductDetails.css"

export const ProductDetails = ({name, price, images, description, productData})=>{
  const [ starsOption, setStarsOption ] = useState(null)
  const [ reviewQuantity, setReviewQuantity ] = useState(null)
  const { dispatch}       = useContext(CartContext)
  const { setIsLoading }  = useContext(IsLoadingContext)

  const [quantity, setQuantity] = useState(1)

  const history = useNavigate()
  const nextButtonCarrousel = useRef()  

  useEffect(()=>{    
    const starsOptionRandom = Math.ceil((Math.random()/2)*10)    
    starsOptionRandom === 1 && setStarsOption(star1)
    starsOptionRandom === 2 && setStarsOption(star2)
    starsOptionRandom === 3 && setStarsOption(star3)
    starsOptionRandom === 4 && setStarsOption(star4)
    starsOptionRandom === 5 && setStarsOption(star5)

    setReviewQuantity(`${Math.ceil((Math.random())*500)}`)  

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
      <div className='productDetailsGrid'>
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
    
        <div className="detailsGrid">
          
          <h2 className="titulo" id="tituloProducto">{name}</h2>
          
          <div className="reviewContainer">
            <img 
              className="reviewStars" 
              src={starsOption} 
              alt="Imagen que muestra las reviews hechas por los usuarios" />
            
            <p className="reviewText">{reviewQuantity} Reviews</p>
          </div>
          
          
          <h3 className="precio" id="precioProducto">{`$${price}`}</h3>
          <img className="ecologyBanner" src={ecologyBanner} alt="Imagen que muestra que nuestra marca no usa pesticidas y requiere menos uso de agua que lo " />
          
          <div className="lineProductDetails"></div>
          
          <div className="ATCcontrolsGrid">            
            <img src={lessQuantity} className="lessQuantity" onClick={()=>quantity > 1 && setQuantity(quantity-1)}/>
            <span className="quantity">{quantity}</span>
            <img src={moreQuantity}  className="moreQuantity" onClick={()=>setQuantity(quantity+1)}/>            
            <button className="botonATC" onClick={onClickATChandler}>Add to Cart</button> 
          </div>   

          <div className="lineProductDetails"></div>      
          
          <button className="botonComprar" onClick={onClickBINhandler} >Buy it Now</button>
        </div>
      </div>       
        
      <div className="descriptionContainer">
        <h3 className="tituloDescripcion">Descripcion</h3>
        <p className="descripcion">{description}</p>
      </div>
      
    </>
  )
}