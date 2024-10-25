import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DineroProvider } from './Cuentas/DineroContext';
import { AuthProvider } from './Login/AuthContext'; 
import Layout from './Layout/layout';
import Prestamo from './Prestamo/prestamo';
import Convert from './Conversor/convert';
import DineroDisp from './Cuentas/DineroDisp';
import HelpCenter from './Help/Helpcenter';
import Cuentas from './Cuentas/Cuentas';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Tarjetas from './Tarjetas/Tarjetas';
import ProtectedRoute from './Login/ProtectedRoute'; 
import LandPage from './Inicio/Inicio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/inicio',
        element: <ProtectedRoute element={<LandPage />}/>,
      },     
       {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/prestamos',
        element: <ProtectedRoute element={<Prestamo />} />,
      },
      {
        path: '/transferencias',
        element: <ProtectedRoute element={<DineroDisp />} />,
      },
      {
        path: '/cuentas',
        element: <ProtectedRoute element={<Cuentas />} />,
      },
      {
        path: '/tarjetas',
        element: <ProtectedRoute element={<Tarjetas />} />,
      },
      {
        path: '/convertidor',
        element: <ProtectedRoute element={<Convert />} />,
      },
      {
        path: '/helpcenter',
        element: <HelpCenter />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <DineroProvider>
        <RouterProvider router={router} />
      </DineroProvider>
    </AuthProvider>
  );
};

export default App;
