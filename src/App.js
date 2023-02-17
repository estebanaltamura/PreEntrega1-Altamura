import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/Categories/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { Cart } from './components/Cart';
import { CartContextProvider } from './components/CartContextProvider';
import { HomeContainer } from './components/Home/HomeContainer/HomeContainer';

import { BrowserRouter,  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
              {/* todo apunta a las colecciones que es lo que ya tengo*/}
            <Route path="*" element = {<ItemListContainer />}/>
            <Route path="/home" element = {<HomeContainer />}/>
            <Route path="/categorias/:idCategoria" element = {<ItemListContainer />}/>
            <Route path="/nosotros" element = {<ItemListContainer />}/>
            <Route path="/contacto" element = {<ItemListContainer />}/>
            <Route path="/products/:id" element = {<ItemDetailsContainer />}/>
            <Route path="/cart" element = {<Cart />}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
