import "../components/ItemDetails.css"
import { Link } from "react-router-dom"


export const ItemDetails = ({nombre, precio, imagen})=>{
    return(
        <>
        <div id="carouselExampleControls" className="carrusel carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" >
                <img id="carrousel1" src={imagen} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
              </div>
              <div className="carousel-item">
                <img src={imagen} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
              </div>
              <div className="carousel-item">
                <img src={imagen} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
              </div>
              <div className="carousel-item">
                <img src={imagen} className="d-block w-100" alt="Mochila de modelo llamado Anti Gravity 65L color verde de tamaño grande 65 litros con precio 21000 pesos" />
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

        
        <h2 className="titulo" id="tituloProducto">{nombre}</h2>
        <h3 className="precio" id="precioProducto">{precio}</h3>
        <img className="reviews" src="https://i.postimg.cc/hjgB1LmP/reviews.jpg" alt="Imagen que muestra las reviews hechas por los usuarios" />
        <img className="noPesticidas" src="https://i.postimg.cc/kg09B3XS/noPesticidas.jpg" alt="Imagen que muestra que nuestra marca no usa pesticidas y requiere menos uso de agua que lo " />
        <Link to = "/cart" className="botonATC" id="botonATC">Agregar al carrito</Link>
        <Link className="botonComprar">Comprar</Link>
        <h3 className="tituloDescripcion">Descripcion</h3>
        <p className="descripcion">Nunca digas que no se puede hacer. Después de eliminar los límites de las tecnologías de fabricación tradicionales, nació la Serie kaiken. Diseñada por el equipo de innovación, la tecnología AntiGravity cambia las reglas del juego en la industria. El torso, el arnés y el cinturón lumbar específicos para mujeres garantizan la máxima eficiencia, comodidad y seguridad, mientras que el innovador soporte lumbar Fitscape™ impreso en 3D con tecnología Carbon DLS™ proporciona una ventilación superior, un soporte ajustado y un agarre antideslizante.</p>
        </>
    )
}