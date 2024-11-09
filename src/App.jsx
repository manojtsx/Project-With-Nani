import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Dashboard from './component/admin/Dashboard'
import AddQuestion from './component/admin/AddQuestion'

function App() {
  const router = createBrowserRouter([
    {
      path : '/login',
      element : <Login />
    },
    {
      path : '/register',
      element : <Register />
    },
    {
      path : '/dashboard',
      element : <Dashboard />
    },
    {
      path : '/add',
      element : <AddQuestion />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App