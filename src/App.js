import { useEffect, useContext } from 'react';
import { CartContext } from './components/Contexts/CartContextProvider';
import { NavBar } from './components/Nav/NavBar';
import { ItemListContainer } from './components/Categories/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetails/ItemDetailsContainer';
import { CartItemsContainer } from './components/Cart/CartItemsContainer'
import { Payment } from './components/Payment/Payment';
import { HomeContainer } from './components/Home/HomeContainer/HomeContainer';
import { We } from './components/We/We';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  const {itemsCartAdded, setItemsCartAdded} = useContext(CartContext)
  
  useEffect(()=>{
    const beforeUnloadHandler = ()=>{  
      itemsCartAdded.length > 0 && localStorage.setItem("itemsCartAdded", JSON.stringify(itemsCartAdded))          
    }   
    
    if (localStorage.getItem("itemsCartAdded")){
      setItemsCartAdded(JSON.parse(localStorage.getItem("itemsCartAdded")))
      localStorage.removeItem("itemsCartAdded")
    }
    
    window.addEventListener("unload", beforeUnloadHandler)
   
    return ()=>{
      window.removeEventListener("unload", beforeUnloadHandler)      
    }    
  })

  return (
        <>
          <NavBar />
          <Routes>
              <Route path="*" element = {<HomeContainer />}/>
              <Route path="/home" element = {<HomeContainer />}/>
              <Route path="/collections/:idCollection" element = {<ItemListContainer />}/>
              <Route path="/We" element = {<We />}/>
              <Route path="/ContactUs" element = {<ContactUs />}/>
              <Route path="/products/:id" element = {<ItemDetailsContainer />}/>
              <Route path="/cart" element = {<CartItemsContainer />}/>
              <Route path="/payment" element = {<Payment />}/>
          </Routes>
          <Footer />
        </>   
  );
}

export default App;
