import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/Categories/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { Cart } from './components/Cart';
import { CartContextProvider } from './components/CartContextProvider';
import { HomeContainer } from './components/Home/HomeContainer/HomeContainer';
import { We } from './components/We/We';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
              {/* todo apunta a las colecciones que es lo que ya tengo*/}
            <Route path="*" element = {<HomeContainer />}/>
            <Route path="/home" element = {<HomeContainer />}/>
            <Route path="/categorias/:idCategoria" element = {<ItemListContainer />}/>
            <Route path="/We" element = {<We />}/>
            <Route path="/ContactUs" element = {<ContactUs />}/>
            <Route path="/products/:id" element = {<ItemDetailsContainer />}/>
            <Route path="/cart" element = {<Cart />}/>
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
