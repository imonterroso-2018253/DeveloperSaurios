import React, { createContext, useState, useEffect } from 'react'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ServiciosAdicionales } from './pages/ServiciosAdicionales/ServiciosAdicionales'
import { NewBodega } from './pages/Bodega/NewBodega'

export const AuthContext = createContext();

//ESTE COMPONTE SIRVE PARA CREAR EL ENRUTADOR Y AL MISMO PASARLE UN CONTEXTO (SERIE DE DATOS, OBJETOS, STRINGS, ARRAYS)
export const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) setLoggedIn(true)
  }, [])

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NewBodega />,
      children: [
        {
          path: '/ServiciosAdicionales',
          element: <ServiciosAdicionales />,
        }
      ]
    }
  ])

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  )
}
