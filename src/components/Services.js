import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <NavLink to="design">Design</NavLink>
        <NavLink to="development">Development</NavLink>
      </nav>
      <Routes>
        <Route path="design" element={<ServiceDetail type="Design" />} />
        <Route path="development" element={<ServiceDetail type="Development" />} />
      </Routes>
    </div>
  );
};

export default Services;
