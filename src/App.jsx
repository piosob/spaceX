import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { About, Homepage, Rockets, Launches, PageNotFound } from './pages';
import { Layout } from './components/Layout/Layout';

export function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Launches />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
