import { BsCart4 } from "react-icons/bs";
import "../components/NavBar.css"



export const NavBar =()=>{
    
    return(
        <header>
            <nav className="navbar navbar-expand-lg contenedorMenu">
            <div className="container-fluid contenedorMenu">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                    <h1 className="logo">PANDORA</h1>
                    <h3 className="itemCartQuantity">3</h3>
                    <BsCart4 className="carro" />
                    
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Colecciones
                            </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Linea urbana</a></li>
                                    <li><a className="dropdown-item" href="#">Linea viajera</a></li>
                                    <li><a className="dropdown-item" href="#">Linea alpinismo</a></li>
                                 </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Novedades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <BsCart4 className="carroDesktop" />
                </div>
            </div>
          </nav>
        </header>
    )
}