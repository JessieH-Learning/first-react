import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { NotFoundPage } from './Pages/NotFoundPage';
import { UseState } from './Pages/UseState';
import { Fetch } from './Pages/Fetch';
import { PracticeContext } from './Pages/PracticeContext';
import { ReactQuery } from './Pages/ReactQuery';
import { Form } from './Pages/Form';
import { NavbarRouter } from './NavbarRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,  // Default is true
      },
    },
  });
  const [userName, setUserName] = useState();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, setUserName, }}>
          <Router>
            <NavbarRouter />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/useState' element={<UseState />}></Route>
              <Route path='/fetch' element={<Fetch />}></Route>
              <Route path='/practiceContext' element={<PracticeContext />}></Route>
              <Route path='/reactQuery' element={<ReactQuery />}></Route>
              <Route path='/form' element={<Form />}></Route>
              <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div >
  );
}

export default App;
