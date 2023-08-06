import './App.css';

import NavBar from './components/Navbar.js';
import ItemListConteiner from './components/ItemListConteiner.js';
import ItemDetailConteiner from './components/ItemDetailConteiner.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Error from './components/Error.js';
import "../src/firebase/config"
import CheckOut from './components/Checkout.js';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';

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