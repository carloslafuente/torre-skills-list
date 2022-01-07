import apiService from '../config/axios.config';

export async function getAllSkills() {
  const http = apiService.instance;
  const response = await http.get('/skills');
  const skills = response.data.data;
  return skills;
}
