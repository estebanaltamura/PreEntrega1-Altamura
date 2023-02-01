import imagen from "../assets/images/linea-alpinismo/aether55.jpg";
import "../components/Item.css"


export const Item = ()=>{
    return(
        <div className="card">
            <img src={imagen} className="card-img-top" alt="jojo" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>    
                
                </div>
        </div>
    )
}



