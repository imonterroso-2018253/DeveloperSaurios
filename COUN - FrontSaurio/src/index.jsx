import React, { createContext, useState, useEffect } from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import { HomePage } from './Pages/HomePage'
import { NotFoundPage } from './Pages/NotFoundPage'
import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { Universidades } from './Pages/Universidades';
import { Istmo } from './Pages/Universidades/Istmo';
import { Rafael } from './Pages/Universidades/Rafael';
import { Meso } from './Pages/Universidades/Meso';
import { Pana } from './Pages/Universidades/Pana';
import { SanCarlos } from './Pages/Universidades/SanCarlos';
import { Comentarios } from './Pages/Comentarios';

export const AuthContext = createContext();
export const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const [dataUser, setDataUser] = useState({
    sub: '',
    name: '',
    username: '',
    role: ''
  });
  const [loading, setLoading] = useState(true);

  const getUserDataFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      setLoggedIn(true);
      setDataUser(decodedToken);
      setLoading(false); // Marcar la carga como completada
    }
  };

  useEffect(() => {
    getUserDataFromToken();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserDataFromToken();
    } else {
      setLoading(false);
    }
  }, [localStorage.getItem("token")]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/Login',
          element: <LoginPage />
        },
        {
          path: '/Register',
          element: <RegisterPage />
        },
        {
          path: '/universidades',
          element: <Universidades />
        },
        {
          path: '/Istmo',
          element: <Istmo />
        },
        {
          path: '/Rafael',
          element: <Rafael />
        },
        {
          path: '/Meso',
          element: <Meso />
        },
        {
          path: '/Pana',
          element: <Pana />
          
        },
        {
          path: '/SanCarlos',
          element: <SanCarlos />
        },
        {
          path: '/Comentarios',
          element: <Comentarios />
        }
      ]
    }
  ])

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  )
}
