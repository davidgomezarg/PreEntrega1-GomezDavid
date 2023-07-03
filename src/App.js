import './App.css';

import NavBar from './components/Navbar.js';
import ItemListConteiner from './components/ItemListConteiner.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner
      greeting="Hol@! Bienbenid@!"
      tittle="Produccion de Hongos Comestibles"
      description="El aserrín de descarte de la gran industria maderera de Misiones convierte a la region en una gran potencia productora de hongos comestibles y medicinales."
      />

    </div>
  );
}

export default App;