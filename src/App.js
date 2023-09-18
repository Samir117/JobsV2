import Sidebar from './components/Sidebar';/* Importando los componentes */
import Home from './components/pages/Home';
import Salir from './components/pages/Salir'
import Configuracion from './components/pages/Configuracion';
import Perfil from './components/pages/Perfil';
import Barra from './components/Barra';
import { BrowserRouter, Route, Routes } from 'react-router-dom';/* Importando libreria de rutas para las paginas */
import './App.css'

function App() {
  return (
    <BrowserRouter>
   <Barra/>
      <div className='flex'>
        <Sidebar />
        <div className='content w-100'>
          <Routes>
            <Route  exact path="/Home" element={<Home />}/>
            <Route  path="/Perfil"  element={<Perfil />} />
            <Route  path="/Configuracion"  element={<Configuracion />} />
            <Route  path="/Salir" element={<Salir />} />
          </Routes>
        </div>
       
      </div>

      
    </BrowserRouter>

   
  ); 

    
}
export default App;
