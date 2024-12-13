import React, { useState } from 'react';
import fetchUserData from '../api/fetchUserData';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter GitHub Username:
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="github-username"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Looks like we can't find the user.</p>
      ) : userData ? (
        <div>
          <h2>User Information</h2>
          <img src={userData.avatar_url} alt={userData.name} width="100" height="100" />
          <h3>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              {userData.name} ({userData.login})
            </a>
          </h3>
        </div>
      ) : null}
    </div>
  );
}
export default Search;