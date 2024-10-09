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
import Signup from './components/backendcomp/signup';
import { Provider } from 'react-redux';
import Login from './components/backendcomp/login';
import Offers from './components/stylingcomp/Offer';
import UserDataDisplay from './components/stylingcomp/showuserdata';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import AboutUs from './components/stylingcomp/about';

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
        path: "/work",
        element: <Workasaffitialte />
      },
      {
        path: "/merchant",
        element: <Becomemerchant />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/offer",
        element: <Offers />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      // Aap yahan aur routes bhi add kar sakte hain
    ],
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/showuser",
    element: <UserDataDisplay />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
