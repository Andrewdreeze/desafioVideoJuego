// src/components/GameDetailsView.jsx
import React from 'react';

/**
 * Componente GameDetailsView: Muestra los detalles de un videojuego.
 */
const GameDetailsView = ({ game }) => {
  if (!game) return <p>Cargando...</p>;

  return (
    <div className="game-details-view">
      <h2>{game.name}</h2>
      <img src={game.background_image} alt={game.name} width="200" />
      <p>Géneros: {game.genres.map((genre) => genre.name).join(', ')}</p>
      <p>Puntuación: {game.metacritic || 'N/A'}</p>
      <p>Plataformas: {game.platforms.map((p) => p.platform.name).join(', ')}</p>
      <p>Año de lanzamiento: {game.released}</p>
      {game.clip && (
        <video controls width="400">
          <source src={game.clip.clip} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      )}
    </div>
  );
};

export default GameDetailsView;