import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Home from './Views/Home.tsx';
import Dashboard from './Views/Dashboard.tsx';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'login',
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
