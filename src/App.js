import './App.css';

import NavBar from './components/Navbar.js';
import ItemListConteiner from './components/ItemListConteiner.js';
import ItemDetailConteiner from './components/ItemDetailConteiner.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Error from './components/Error.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner/>}/>
        <Route path='/category/:id' element={<ItemListConteiner/>}/>
        <Route path='/item/:id' element={<ItemDetailConteiner/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>

      </BrowserRouter>
      
    </div>
    
  );
}

export default App;