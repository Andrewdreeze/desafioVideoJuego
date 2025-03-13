// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { fetchVideoGames } from '../services/rawgApiService';
import GameCardList from '../components/GameCardList';
import GameFinder from '../components/GameFinder';
import GameFilters from '../components/GameFilters';

/**
 * Página HomePage: Muestra la lista de videojuegos y opciones de búsqueda/filtrado.
 */
const HomePage = () => {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchVideoGames(filters);
      setGames(data?.results || []);
    };
    loadGames();
  }, [filters]);

  const handleSearch = (query) => {
    setFilters({ search: query });
  };

  const handleFilterApply = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <GameFinder onSearch={handleSearch} />
      <GameFilters applyFilters={handleFilterApply} />
      <GameCardList games={games} />
    </div>
  );
};

export default HomePage;