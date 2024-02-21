
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/checkout/Checkout';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import Error404 from './components/Error404/Error404';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className='app'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes className="content">
            <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
            <Route path="/" element={<Hero/>} />
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/order-confirmation/:id" element={<OrderConfirm/>}/>
            <Route path="*" element={<Error404/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/checkout/" element={<Checkout/>} />
          </Routes>    
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>  
    </div>
  );
}

export default App;
