import React, { createContext, useState, useEffect } from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import { HomePage } from './Pages/HomePage'
import { NotFoundPage } from './Pages/NotFoundPage'
import { CARDS } from './Pages/CARDS';
import { Istmo } from './Pages/Universidades/Istmo';

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
        }else{
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
                  path: '/universidades',
                  element: <CARDS />
              },
              {
                path: '/Istmo',
                element: <Istmo />
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
