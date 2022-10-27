import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './Pages/Accceuil/Acceuil';
import About from './Pages/Aeroport/Aeroport';
import { Intermed } from './Pages/Intermed/Intermed';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome/>,
  },
  {
    path: '/about/:id',
    element: <About/>,
  },

  {
    path: '/intermed:item',
    element: <Intermed/>,
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();