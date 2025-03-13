// src/components/GameFinder.jsx
import React, { useState } from 'react';

/**
 * Componente GameFinder: Una barra de búsqueda para encontrar videojuegos.
 */
const GameFinder = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleFormSubmit} className="game-finder">
      <input
        type="text"
        placeholder="Buscar videojuegos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default GameFinder;