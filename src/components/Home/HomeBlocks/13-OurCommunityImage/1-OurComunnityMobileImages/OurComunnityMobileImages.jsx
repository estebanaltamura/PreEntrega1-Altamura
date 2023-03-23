import { useEffect, useRef } from "react"
import { BsChevronCompactLeft } from "react-icons/bs"
import { BsChevronCompactRight } from "react-icons/bs"
import "./OurComunnityMobileImages.css"

export const OurCommunityMobileImages = ()=>{

    const nextButtonCarrousel = useRef()

    useEffect(()=>{
      nextButtonCarrousel.current.click()
    },[])

    return(
        <div id="carouselExampleControls" className="carousel slide sliderFotosdeUso" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item">
                <img src="https://i.postimg.cc/rskKWRVS/ourcommunity1.jpg" className="d-block w-100" alt="Mujer con mochila naranja mirando hacia atras en direccion a la camara con una mochila naranja de nuestra linea urbana" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/50c0dQFZ/ourcommunity2.jpg" className="d-block w-100" alt="Mujer montando una bicicleta cerca de un lago" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/FHR1j44n/ourcommunity3.jpg" className="d-block w-100" alt="Hombre caminando por una ciudad con una mochila" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/X7xpGvTC/ourcommunity4.jpg" className="d-block w-100" alt="Mujer caminando por una ciudad con una mochila de nuestra linea de viaje" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/jjn5F4CH/ourcommunity5.jpg" className="d-block w-100" alt="Mujer de espaldas con una mochila de nuestra linea de viaje mirando al horizonte" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/brpwdXgg/ourcommunity6.jpg" className="d-block w-100" alt="Mujer con nuestra mochila de viaje en un bosque" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/Wz8bk9fv/ourcommunity7.jpg" className="d-block w-100" alt="Mujer de espaldas con una mochila mirando al horizonte" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/wxQBZvxG/ourcommunity8.jpg" className="d-block w-100" alt="Hombre escalando una montaña con nuestra mochila de alpinismo" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/pTDd2Vfy/ourcommunity9.jpg" className="d-block w-100" alt="Mujer usando una mochila de nuestra linea urbana" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/L4tqSDDv/ourcommunity10.jpg" className="d-block w-100" alt="Hombre sentado en una escalera ordenando el contenido de una mochila de nuestra linea urbana" />
              </div>
              <div className="carousel-item">
                <img src="https://i.postimg.cc/KjD45cjC/ourcommunity11.jpg" className="d-block w-100" alt="Hombre de espaldas usando una mochila de nuestra linea urbana" />
              </div>
              <div className="carousel-item active">
                <img src="https://i.postimg.cc/SxvRdvQQ/ourcommunity12.jpg" className="d-block w-100" alt="Mujer de espaldas mirando un lago usando una mochila de nuestra linea urbana" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <BsChevronCompactLeft className="sliderIcons" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button ref={nextButtonCarrousel} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <BsChevronCompactRight className="sliderIcons" />
                <span className="visually-hidden">Next</span>
            </button>
          </div>
    )
}