import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Perfil from './components/pages/Perfil';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Ofertas from './components/pages/Ofertas';
import { useState } from 'react';


function App() {

  const [isAdmin, setIsAdmin, userNombre] = useState(false); // Inicialmente no es administrador

  return (
    <BrowserRouter>
      <div className="flex">
        <div className="content w-100">
          <Routes>
          <Route path="/Login" element={<Login setIsAdmin={setIsAdmin} />} />
            <Route path="/Home" element={<Home userNombre={userNombre}  setIsAdmin={setIsAdmin} />} />
            <Route path="/Perfil" element={<Perfil setIsAdmin={setIsAdmin} />} />
            <Route path="/*" element={<Login setIsAdmin={setIsAdmin} />} />
            <Route path="/Dashboard" element={<Dashboard isAdmin={isAdmin} />} />
            <Route path="/Ofertas" element={<Ofertas isAdmin={isAdmin} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
