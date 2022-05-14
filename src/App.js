import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Homepage, LatestFlight, Missions, PageNotFound } from './pages';
import { PageHeader } from './components';

import './scss/App.scss'

export function App() {
  return (
    <BrowserRouter>
      <PageHeader />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/latest-flight" element={<LatestFlight />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

