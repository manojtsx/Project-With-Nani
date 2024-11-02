import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/auth/Login'
import Register from './component/auth/Register'

function App() {
  const router = createBrowserRouter([
    {
      path : '/login',
      element : <Login />
    },
    {
      path : '/register',
      element : <Register />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App