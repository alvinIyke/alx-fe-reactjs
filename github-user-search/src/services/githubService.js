import axios from 'axios';

const GITHUB_API_URL = '(https://api.github.com/users/{username})';

const githubService = {
  async getUser(username) {
    try {
      const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getRepos(username) {
    try {
      const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default githubService;


