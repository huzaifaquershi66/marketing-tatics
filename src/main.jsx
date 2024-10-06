// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/stylingcomp/Home'; // Home component import karein
import Workasaffitialte from './components/stylingcomp/Workasaffitialte';
import Becomemerchant from './components/stylingcomp/Becomemerchant';
import Product from './components/stylingcomp/Product';
import ScrollToTop from './components/Scrool';

const router = createBrowserRouter([
  {
    path: '/', // Home route
    element: <App />, // App component render karein
    children: [
     
      {
        index: true, // Yeh index route hai
        element: <Home />, // Home component render karein
      },
      {
        path:"/work",
        element:<Workasaffitialte/>
      },{
        path:"/merchant",
        element:<Becomemerchant/>
      },
      {
        path:"/product",
        element:<Product/>
      }
      
      // Aap yahan aur routes bhi add kar sakte hain
    ],
    
  },
  // {
  //   path:"/work",
  //   element:<Workasaffitialte/>
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* RouterProvider use karein */}
  </React.StrictMode>
);
