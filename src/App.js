import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Homepage, Rockets, Missions, PageNotFound } from './pages';
import { PageHeader } from './components';

import './scss/App.scss'

export function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

