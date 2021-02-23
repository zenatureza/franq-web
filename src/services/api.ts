import axios from 'axios';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const recoverApi = axios.create({
  baseURL: `https://api.hgbrasil.com/finance?key=${process.env.REACT_APP_HGFINANCE_KEY}`,
});
