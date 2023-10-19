import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Home from './pages/Home/index';
import Error from './pages/Error/index';
import Product from './pages/Product/index';
import Basket from './pages/Basket/index';
import Login from './pages/Login/index';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/404" element={<Error/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
