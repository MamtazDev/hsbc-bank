import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';
import Overview from './components/overview/Overview';
import CreateAccount from './components/createAccount/CreateAccount';
import ExchangeRate from './components/exchangeRate/ExchangeRate';
import MakePayment from './components/makePayment/MakePayment';
import Account from './components/account/Account';
import RequestSucess from './components/requestSucess/RequestSucess';
import FormContextProvider from './context/FormDataContext';
import Login from './components/Authentication/Login';

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
        path: '/account/:id',
        element: <Account />,
      },

      {
        path: '/requestSucess',
        element: <RequestSucess />,
      }
    ]
  },
    {
      path: '/login',
      element: <Login />
    }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormContextProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </FormContextProvider>

)
