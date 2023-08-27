import { useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IsLoadingContext } from './contexts/IsLoadingContextProvider';
import { useRecoverDataCartFromLocalStorage } from './hooks/useRecoverDataCartFromLocalStorage';
import { Home } from './pages/home/Home';
import { Collection } from './pages/collections/Collection';
import { NavBar } from './components/nav/NavBar';
import { ProductDetailsContainer } from './pages/products/ProductDetailsContainer';
import { Cart } from './pages/cart/Cart';
import { AboutUs } from './pages/aboutUs/AboutUs';
import { ContactUs } from './pages/contactUs/ContactUs';
import { Footer } from './components/footer/Footer';
import { CustomOrder } from './pages/customOrder/CustomOrder';
import { OrderCreated } from './pages/orderCreated/OrderCreated';
import { MercadoPagoTutorial } from './pages/mercadoPagoTutorial/MercadoPagoTutorial';
import './App.css';

function App() {  
  const { isLoading } = useContext(IsLoadingContext) 
  const { recoverCartDataFromLocalStorage } = useRecoverDataCartFromLocalStorage()
    
  useEffect(()=>{        
    recoverCartDataFromLocalStorage() 
    //eslint-disable-next-line  
  },[])  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*"                                         element = {<Navigate to="/home" />}/>
        <Route path="/home"                                     element = {<Home />}/>
        <Route path="/collections/Urban backpacks"              element = {<Collection key="UrbanBackpacks"/>}/>
        <Route path="/collections/Travel backpacks"             element = {<Collection key="TravelBackpacks"/>}/>
        <Route path="/collections/Climbing backpacks"           element = {<Collection key="ClimbingBackpacks"/>}/>
        <Route path="/collections/New arrivals - Backpacks"     element = {<Collection key="NewArrivalsCollection"/>}/>              
        <Route path="/aboutUs"                                  element = {<AboutUs />}/>
        <Route path="/contactUs"                                element = {<ContactUs />}/>
        <Route path="/products/:idCollection/:idProduct"        element = {<ProductDetailsContainer />}/>
        <Route path="/cart"                                     element = {<Cart />}/>
        <Route path="/customOrder"                              element = {<CustomOrder />}/>
        <Route path="/orderCreated/:orderId"                    element = {<OrderCreated />}/>        
        <Route path="/mercadoPagoTutorial"                      element = {<MercadoPagoTutorial />}/>
      </Routes>
      {!isLoading && <Footer />}
    </>   
  );
}
 
export default App;  