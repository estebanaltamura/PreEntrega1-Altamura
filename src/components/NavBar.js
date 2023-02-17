import { BsCart4 } from "react-icons/bs";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

 


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
                            <NavLink className="nav-link active link" aria-current="page" to ="/home">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to = "/lineaUrbana">
                            Colecciones
                            </div>
                                <ul className="dropdown-menu">
                                    <li> 
                                        <NavLink className="link" to = "/categorias/lineaUrbana">Linea urbana</NavLink>
                                    </li>
                                                               
                                    <li> 
                                        <NavLink className="link" to = "/categorias/lineaViajera">Linea viajera</NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="link" to = "/categorias/lineaAlpinismo">Linea alpinismo</NavLink>
                                    </li>
                                 </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/categorias/lineaNovedades">Novedades</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/We">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/ContactUs">Contact Us</NavLink>
                        </li>
                    </ul>
                    <BsCart4 className="carroDesktop" />
                </div>
            </div>
          </nav>
        </header>
    )
}