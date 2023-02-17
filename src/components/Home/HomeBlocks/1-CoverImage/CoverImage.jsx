import "./CoverImage.css"


export const CoverImage = ()=>{
    return(
        <>
            {
                window.innerWidth < 375 ?
                    <img className="portadaMobile" src="https://i.postimg.cc/W3nPWdmm/portada-mobile.jpg" alt="imagen chica" />:
                window.innerWidth < 768 ?
                    <img className="portada375" src="https://i.postimg.cc/Zn5z1JjG/portada375.jpg" alt="imagen media" />:
                    <img className="portadaDesktop" src="https://i.postimg.cc/W1kcRW61/portada-desktop.jpg" alt="imagen grande" />

                 
            }
        </>
    )
}