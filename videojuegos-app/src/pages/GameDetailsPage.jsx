// src/pages/GameDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameInfo } from '../services/rawgApiService';
import GameDetailsView from '../components/GameDetailsView';

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const loadGame = async () => {
      const data = await fetchGameInfo(gameId);
      setGame(data);
    };
    loadGame();
  }, [gameId]);

  return <GameDetailsView game={game} />;
};

export default GameDetailsPage;