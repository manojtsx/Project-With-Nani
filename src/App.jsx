import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Dashboard from './component/admin/Dashboard'
import AddQuestion from './component/admin/AddQuestion'
import EditQuestion from './component/admin/EditQuestion'

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
    },
    {
      path : '/edit/:id',
      element : <EditQuestion />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App