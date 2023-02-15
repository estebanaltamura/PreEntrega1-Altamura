import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
            {/* todo apunta a las colecciones que es lo que ya tengo*/}
          <Route path="*" element = {<ItemListContainer />}/>
          <Route path="/home" element = {<ItemListContainer />}/>
          <Route path="/categorias/:idCategoria" element = {<ItemListContainer />}/>
          <Route path="/nosotros" element = {<ItemListContainer />}/>
          <Route path="/contacto" element = {<ItemListContainer />}/>
          <Route path="/products/:id" element = {<ItemDetailsContainer />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
