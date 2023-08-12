import './App.css';

import NavBar from './components/navbar/Navbar.js';
import ItemListConteiner from './components/itemListConteiner/ItemListConteiner.js';
import ItemDetailConteiner from './components/itemDetailConteiner/ItemDetailConteiner.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Error from './components/error/Error.js';
import "../src/firebase/config"
import CheckOut from './components/checkout/Checkout.js';
import CartProvider from './context/CartContext';
import Cart from './components/cart/Cart.js';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListConteiner/>}/>
            <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
            <Route path='/item/:Id' element={<ItemDetailConteiner/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/*' element={<Error/>}/>
          </Routes>

        </BrowserRouter>
      </CartProvider>
      
    </div>
    
  );
}

export default App;