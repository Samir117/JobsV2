import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../login.css';
import usuario from '../../assets/usuario.png';
import imagenDatos2 from '../../assets/img1.png';

function Login({ setIsAdmin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Realiza una solicitud a la API para verificar las credenciales
    try {
      if( username !== '' && password !== '') {
      const response = await fetch('http://159.223.134.9/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log('Response ', response)
      if (response != null) {
        const data = await response.json();
        
        if (data.isAdmin) {
          // Si las credenciales son de administrador, redirige a la página de administrador
          navigate('/admin');
        } else {
          // Si las credenciales son de usuario no administrador, redirige a la página de inicio
          navigate('/Home');
          setUsername('')
          setPassword('')
        }
      }
      } else {
        alert('Credenciales inválidas. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
      alert('Ocurrió un error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <img src={usuario} alt="logo" />
        <h3>Welcome Back!</h3>
        <form className="form" onSubmit={handleLogin}>
          <input
            className="txtusuario"
            type="text"
            placeholder="Ingresa tu Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="txtpassword"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <div className="custom">
        <img className="custom-image" src={imagenDatos2} alt="sa" />
      </div>
    </div>
  );
}

export default Login;
