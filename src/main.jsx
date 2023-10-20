import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';
import Overview from './components/overview/Overview';
import CreateAccount from './components/createAccount/CreateAccount';
import ExchangeRate from './components/exchangeRate/ExchangeRate';
import MakePayment from './components/makePayment/MakePayment';
import Account from './components/account/Account';

const router = createBrowserRouter([
  {

    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },

      {
        path: '/createAccount',
        element: <CreateAccount />,
      },

      {
        path: '/exchangeRate',
        element: <ExchangeRate />,
      },

      {
        path: '/makepayment',
        element: <MakePayment />,
      },

      {
        path: '/account',
        element: <Account />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
