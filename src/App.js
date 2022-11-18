import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { UseState } from './pages/UseState';
import { Fetch } from './pages/Fetch';
import { PracticeContext } from './pages/PracticeContext';
import { Navbar } from './Navbar';

export const AppContext = createContext();

function App() {

  const [userName, setUserName] = useState();

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName, }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/useState' element={<UseState />}></Route>
            <Route path='/fetch' element={<Fetch />}></Route>
            <Route path='/practiceContext' element={<PracticeContext />}></Route>
            <Route path='*' element={<h1> Page not found</h1>}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div >
  );
}

export default App;
