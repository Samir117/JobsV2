import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../login.css';
import usuario from '../../assets/usuario.png';
import imagenDatos2 from '../../assets/img1.png';

function Login({setIsAdmin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username ==='' || password ==='') {
      alert('Por favor, ingresa un nombre de usuario y contraseña.');
      return;
    } else if (username ==='admin' && password ==='123') {
       setIsAdmin(true);  

       console.log('cuando es admin', setIsAdmin)
      navigate('/Dashboard')
      }else{
        if(username==='usuario' && password ==='123'){
          console.log('cuando no es admin',setIsAdmin);
              navigate('/Home')

        }
      }

    }

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
          <button
                   onClick={() => setIsAdmin(!setIsAdmin)}
                    type="submit">Entrar</button>
            
        </form>
      </div>
      <div className="custom">
        <img className="custom-image" src={imagenDatos2} alt="sa" />
      </div>
    </div>
  );
  
};

export default Login;
