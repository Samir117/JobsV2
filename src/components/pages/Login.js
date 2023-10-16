import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../login.css';
import usuario from '../../assets/usuario.png';
import imagenDatos2 from '../../assets/img1.png';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificar las credenciales y redirigir según corresponda
    if (username === 'usuario' && password === '123') {
      navigate('/Home');
    } else {
      alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
  }

  return (
    <div className="row">
          <div className="col-md-6">
    <div className="login">
       <img src={usuario} alt="logo" />
      <h3>Welcome Back!</h3>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Ingresa tu Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      </div>
        <div className='custom'>
          <img className='custom-image' src={imagenDatos2} alt="sa" />
        </div>
      </div>
    </div>

    
  );
}

export default Login;
