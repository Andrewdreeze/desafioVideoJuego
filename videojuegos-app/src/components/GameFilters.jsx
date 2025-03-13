import React, { useState } from 'react';

const GameFilters = ({ applyFilters }) => {
  const [yearFilter, setYearFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [platformFilter, setPlatformFilter] = useState('');

  const handleFilterApply = () => {
    applyFilters({
      year: yearFilter,
      genre: genreFilter,
      platform: platformFilter,
    });
  };

  return (
    <div className="game-filters">
      <h3>Filtros de Búsqueda</h3>
      <label>
        Año:
        <input
          type="number"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        />
      </label>
      <label>
        Género:
        <input
          type="text"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        />
      </label>
      <label>
        Plataforma:
        <input
          type="text"
          value={platformFilter}
          onChange={(e) => setPlatformFilter(e.target.value)}
        />
      </label>
      <button onClick={handleFilterApply}>Aplicar Filtros</button>
    </div>
  );
};

export default GameFilters;
