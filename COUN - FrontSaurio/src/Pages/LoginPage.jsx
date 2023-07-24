import React from 'react';
import axios from 'axios';
import "../CSS/Login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../index';

/**
 * Componente funcional Login: página de inicio de sesión.
 */
export const LoginPage = () => {
  const { setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  /**
   * Maneja el cambio en los campos del formulario de inicio de sesión.
   * @param {Object} e - Evento de cambio.
   */
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Realiza la operación de inicio de sesión al enviar el formulario.
   * @param {Object} e - Evento de envío de formulario.
   */
  const login = async (e) => {
    try {
      e.preventDefault(); // Evitar envío del formulario y recarga de página

      // Realizar la petición al backend para iniciar sesión
      const { data } = await axios.post('http://localhost:3200/user/login', credentials);

      // Si el inicio de sesión es exitoso, actualizar el estado global y redirigir a la página principal
      if (data.token) {
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
        setDataUser({
          name: data.userLogged.name,
          username: data.userLogged.username,
          role: data.userLogged.role
        });

        navigate('/');
      }

      // Mostrar mensaje de respuesta del servidor
      alert(data.message);
    } catch (err) {
      // Mostrar mensaje de error en caso de que ocurra algún problema
      alert(err.response.data.message);
    }
  };


  return (
    <>
      <body className='body20'>
        <div className='wrapper'>
          <form action="">

            <h1>Login</h1>

            <div className='input-box1'>
              <input className='input1' type="text" onChange={handleChange} placeholder='Username' required />
              <i className="fa-solid fa-user" ></i>
            </div>

            <div className='input-box1'>
              <input className='input1 ' type="password" onChange={handleChange} placeholder='Password' required />
              <i className="fa-solid fa-lock "></i>
            </div>

            <div className='remember-forgot'>
              <a href="#">Forgot password?</a>
            </div>

            <button type='submit' onClick={login} className='btn1'>Login</button>

            <div className='register-link'>
              <p>Don´t have an account? <a href="#">Register</a></p>
            </div>

          </form>
        </div>
      </body>
    </>
  );
};
