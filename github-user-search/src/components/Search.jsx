import React, { useState } from 'react';
import githubService from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call API to fetch user data
      const response = await fetch(`(https://api.github.com/users/{username})`);
      const userData = await response.json();
      // Handle user data
      console.log(userData);
    } catch (error) {
      setError(error.message);
    }
  };
    return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter GitHub Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="github-username"
        />
      </label>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Search</button>
    </form>
  );
      }

export default Search;
