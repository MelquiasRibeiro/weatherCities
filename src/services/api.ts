import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'a7dec85878d46b4f3dca73d989662028',
  },
});

export default api;
