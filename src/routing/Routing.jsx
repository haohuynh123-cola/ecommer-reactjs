import React from 'react';
import { Route, Routes } from 'react-router';
import Client from './Client';
import Admin from './Admin';

function Routing(props) {
  return (
    <React.Fragment >
      <Routes>
        <Route path="/*" element={<Client />} />
        <Route path="/system/*" element={<Admin />} />
      </Routes>
    </React.Fragment >
  );
}

export default Routing;