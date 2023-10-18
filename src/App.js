import Home from './components/pages/Home';
import Perfil from './components/pages/Perfil';
import Login from './components/pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importando libreria de rutas para las paginas
import './App.css';
import Admin from './components/pages/Admin';

function App() {


  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
                <Route path="/Login"element={<Login />} />
                <Route path="/Home"element={<Home />} />
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/*"element={<Login />} />
                <Route path='/Admin' element={<Admin />} />
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
