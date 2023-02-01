import { BsTypeH1 } from "react-icons/bs";
import "../components/ItemListContainer.css"

import { Item } from "./Item";


export const ItemListContainer = ({greetings})=>{
    return(
        <>
            <h1>{greetings}</h1>
            <Item />
        </>
        
    )
}