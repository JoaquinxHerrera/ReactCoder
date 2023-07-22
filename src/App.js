
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
        <Route path="/" element={ <ItemListContainer/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Page not found: Error  404</h1>}/>
        <Route path="/cart" element={<h1>Cart</h1>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
