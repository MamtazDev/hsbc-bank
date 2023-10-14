import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './components/dashboardLayout/DashboardLayout'

import Overview from './components/overview/Overview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: '/collection/overview',
        element: <Overview />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
