import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Layout/Dashboard.jsx'
import AddTender from './components/AddTender.jsx'
import UpdateTender from './components/UpdateTender.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/add-tender',
    element: <AddTender />
  },
  {
    path: '/update-tender/:id',
    element: <UpdateTender />,
    loader: ({ params }) => fetch(`http://localhost:5000/tender/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
