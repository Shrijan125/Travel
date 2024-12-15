import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailedPage from './Pages/DetailedPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:id" element={<DetailedPage />} />
    </Routes>
  );
};

export default App;
