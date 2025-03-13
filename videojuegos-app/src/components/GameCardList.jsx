// src/components/GameCardList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const GameCardList = ({ games }) => {
  return (
    <div className="game-card-list">
      <h2>Lista de Videojuegos</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/game/${game.id}`}>
              <img src={game.background_image} alt={game.name} width="100" />
              <h3>{game.name}</h3>
              <p>Puntuación: {game.metacritic || 'N/A'}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameCardList;