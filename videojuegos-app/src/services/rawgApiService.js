import axios from 'axios';

const RAWG_ACCESS_TOKEN = '81fbc71f7db34c808434bd0723afef94';
const RAWG_ENDPOINT = 'https://api.rawg.io/api';

export const fetchVideoGames = async (queryParams = {}) => {
  try {
    const response = await axios.get(`${RAWG_ENDPOINT}/games`, {
      params: { key: RAWG_ACCESS_TOKEN, ...queryParams },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener videojuegos:', error);
    return null;
  }
};

export const fetchGameInfo = async (gameId) => {
  try {
    const response = await axios.get(`${RAWG_ENDPOINT}/games/${gameId}`, {
      params: { key: RAWG_ACCESS_TOKEN },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles del videojuego:', error);
    return null;
  }
};