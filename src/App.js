//  Dependencies
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//  Custom modules
import { AppContext } from './AppContext';
import { Home } from './Pages/Home';
import { NotFoundPage } from './Pages/NotFoundPage';
import { UseState } from './Pages/UseState';
import { Fetch } from './Pages/Fetch';
import { PracticeUseEffect } from './Pages/PracticeUseEffect';
import { PracticeContext } from './Pages/PracticeContext';
import { ReactQuery } from './Pages/ReactQuery';
import { Form } from './Pages/Form';
import { PracticePropTypes } from './Pages/PracticePropTypes';
import { NavbarRouter } from './NavbarRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,  // Default is true
      },
    },
  });
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, setUserName, }}>
          <Router>
            <NavbarRouter />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/useState' element={<UseState />} />
              <Route path='/fetch' element={<Fetch />} />
              <Route path='/practiceUseEffect' element={<PracticeUseEffect />} />
              <Route path='/practiceContext' element={<PracticeContext />} />
              <Route path='/reactQuery' element={<ReactQuery />} />
              <Route path='/form' element={<Form />} />
              <Route path='/practicePropTypes' element={<PracticePropTypes />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
