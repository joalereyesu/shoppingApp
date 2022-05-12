import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductCatalog from "./Components/ProductCatalog";
import ShopNavbar from "./Components/ShopNavbar";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ShopNavbar />
    <Routes>
      <Route path='/' element={<ProductCatalog />} />
      <Route path='/categories' />
      <Route path='/products' />
      <Route path='/cart' />
    </Routes>
  </BrowserRouter>
);

