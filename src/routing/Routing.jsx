import React from 'react';
import { Route, Router, Routes } from 'react-router';
import HonePage from '../page/HonePage';
import Product from '../page/Product';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';

function Routing(props) {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<HonePage />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Routing;