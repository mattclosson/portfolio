import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import Resume from './Pages/Resume';
import ScrollToTop from './utils/ScrollToTop';
import { useState } from 'react';

function App() {

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        
      </Routes>
    </ ScrollToTop>
  );
}

export default App;
