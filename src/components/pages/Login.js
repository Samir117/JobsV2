import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../login.css';
import usuario from '../../assets/usuario.png';
import imagenDatos2 from '../../assets/img1.png';
import Swal from 'sweetalert2';
import { useAuth } from '../../token/Auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAdmin, setUserNombre } = useAuth();



  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'INGRESE SUS CREDENCIALES POR FAVOR',
        footer: '<a href="">Necesitas ayuda?</a>',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
      return;
    }

    try {
      const response = await fetch('http://159.223.134.9:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const userNombre = data.user.nombres;
        const userApellido = data.user.apellidos;
        const isAdmin = data.isAdmin;

        setAdmin(isAdmin);
        localStorage.setItem('nombre', userNombre);
        const usuario = {
          nombre: userNombre,
          apellido: userApellido,
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
        console.log('usuario después: ', usuarioGuardado);

        // Resto del código...
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });

        navigate('/Home');

        if (isAdmin === true) {
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido Administrador',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
          });

          navigate('/Dashboard');
        }



      } else {
        // Si la respuesta del servidor no es 200, muestra un mensaje de error genérico.
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El Correo o la contraseña ingresada no son correctos, Por favor vuelva a intentarlo',
          footer: '<a href="">Necesitas ayuda?</a>',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    } catch (error) {
      console.error('Error en la respuesta del servidor:', error);

      // Aquí puedes mostrar un mensaje de error si hubo un problema en la solicitud.
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error en la solicitud al servidor. Por favor, intenta nuevamente más tarde.',
        footer: '<a href="">Necesitas ayuda?</a>',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="txtpassword"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
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
