import apiService from '../config/axios.config';

export async function signup(userCredentials) {
  const http = apiService.instance;
  const response = await http.post('/users', userCredentials);
  const user = response.data.data;
  return user;
}

export async function login(userCredentials) {
  const http = apiService.instance;
  const response = await http.post('auth/login', userCredentials);
  const userInformation = response.data.data;
  localStorage.setItem('token', userInformation.token);
  return userInformation;
}
