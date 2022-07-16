import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProyectosContainer from './components/proyectos/ProyectosContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/proyectos' element={<ProyectosContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

