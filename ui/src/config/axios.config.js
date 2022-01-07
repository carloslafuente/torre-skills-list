import axios from 'axios';

axios.defaults.baseURL = 'https://torre-carlos-lafuente.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const instance = axios.create({
  baseURL: 'https://torre-carlos-lafuente.herokuapp.com/api',
  timeout: 3000,
  headers: {},
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token;
  return config;
});

export default {
  instance,
};
