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
import { UVG } from './Pages/Universidades/UVG'
import { Galileo } from './Pages/Universidades/Galileo'
import { UMG } from './Pages/Universidades/UMG'
import { Vinci } from './Pages/Universidades/Vinci'
import { Pablo } from './Pages/Universidades/Pablo'
import { Occi } from './Pages/Universidades/Occi'
import { Users } from './Pages/ADMIN/Users';
import { Comentarios } from './Pages/Comentarios';
import { Perfil } from './Pages/USER/Perfil'
import { ForgotPasswordPage } from './components/ForgotPasswordPage'
import { UpdateUser } from './Pages/UpdateUser';
import { UpdateProfile } from './Pages/USER/UpdateProfile';

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
          path: '/Perfil',
          element: <Perfil />
        },
        {
          path: '/UpdateP/:id',
          element:
              loggedIn ? (
                  <UpdateProfile />
              ) : <LoginPage />
        },
        {
          path: '/Register',
          element: <RegisterPage />
        },
        {
          path: '/Universidades',
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
          path: '/UVG',
          element: <UVG />
        },
        {
          path: '/Galileo',
          element: <Galileo />
        },
        {
          path: '/UMG',
          element: <UMG />
        },
        {
          path: '/Vinci',
          element: <Vinci />
        },
        {
          path: '/Pablo',
          element: <Pablo />
        },
        {
          path: '/Occi',
          element: <Occi />
        },
        {
          path: '/Users',
          element:
            loggedIn ? (
              dataUser.role == 'ADMIN' ? <Users /> : <HomePage />
            ) : <LoginPage />
        },
        {
          path: '/UpdateU/:id',
          element:
            loggedIn ? (
              <UpdateUser />
            ) : <LoginPage />
        },
        {
          path: '/forgotPassword',
          element: <ForgotPasswordPage />
        },
        {
          path: '/Comentarios/:id',
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
