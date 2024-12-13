import axios from 'axios';
const GITHUB_API_URL = '(https://api.github.com/users/{username})';

const fetchUserData = async (searchTerm) => {
  try {
    const userData = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return userData;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;