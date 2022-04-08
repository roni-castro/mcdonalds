import axios from 'axios';

const client = axios.create({
  baseURL: 'https://mcdonalds.trio.dev/',
  timeout: 15000,
});

export default client;
