import React from 'react';
import { Route, Routes } from 'react-router';
import HonePage from '../page/Client/HonePage';
import Product from '../page/Client/Product';
import Header from '../components/Client/Header';
import Footer from '../components/Client/Footer';
import Cart from '../page/Client/Cart';
import ProductDetail from '../page/Client/ProductDetail';
import ScrollToTop from '../hook/ScrollToTop';

const Client = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<HonePage />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/cart-detail" element={<Cart />} />
        <Route exact path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default Client;