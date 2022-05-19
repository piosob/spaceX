import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Homepage, Rockets, Launches, PageNotFound } from './pages';
import { Layout } from './components/Layout/Layout';

import './scss/App.scss'

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Launches />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

