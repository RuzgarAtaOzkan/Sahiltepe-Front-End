// MODULES
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081/api/v1',
  Accept: 'application/json',
  'Content-Type': 'application/json',
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    try {
      return config;
    } catch (error) {
      console.log(error);
    }
  },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

export default instance;
