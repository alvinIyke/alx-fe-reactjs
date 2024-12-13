

const fetchUserData = async (searchTerm) => {
  try {
    const userData = await githubService.getUser(searchTerm);
    return userData;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;