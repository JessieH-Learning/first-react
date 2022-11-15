// import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Hook } from './pages/Hook';
import { Fetch } from './pages/Fetch';
import { Navbar } from './Navbar';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/hook' element={<Hook />}></Route>
          <Route path='/fetch' element={<Fetch />}></Route>
          <Route path='*' element={<h1> Page not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
