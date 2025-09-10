import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mobile.handswork.pro',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});
