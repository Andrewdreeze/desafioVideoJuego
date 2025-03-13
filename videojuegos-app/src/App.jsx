// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import HomePage from './pages/HomePage';
import GameDetailsPage from './pages/GameDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game/:gameId" element={<GameDetailsPage />} />
    </Routes>
  );
};

export default App;