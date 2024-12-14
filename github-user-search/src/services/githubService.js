import axios from 'axios';
const GITHUB_API_URL = '(https://api.github.com/search/users?q={query})';
const GITHUB_API_TOKEN = 'YOUR_GITHUB_API_TOKEN'


const fetchUserData =  {
  async getUser(username, location, minRepos) {
    try {
      const params = new URLSearchParams();  //for handling query parameters.
      params.set('q', username);
      if (location) {
        params.set('location', location);
      }
      if (minRepos) {
        params.set('repos', `>=${minRepos}`);
      }
     // API request handling for advanced search
      const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
        params,
        headers: {
          Authorization: `Bearer ${GITHUB_API_TOKEN}`,
        },
      });
      return response.data.items[0];
    } catch (error) {
      throw error;
    }
  },
};



export default fetchUserData;

