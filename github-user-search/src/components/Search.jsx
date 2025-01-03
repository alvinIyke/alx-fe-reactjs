import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fetchUserData from '../api/fetchUserData';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await fetchUserData(searchTerm, location, minRepos);
      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };
 
  const userFields = [
    { label: 'GitHub Username:', name: 'searchTerm', value: searchTerm, onChange: setSearchTerm },
    { label: 'Location:', name: 'location', value: location, onChange: setLocation },
    { label: 'Minimum Repositories:', name: 'minRepos', value: minRepos, onChange: setMinRepos },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Search for GitHub Users</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {userFields.map((field) => (  //rendering form fields based on the userFields array with map method
          <div key={field.name} className="flex flex-col space-y-2">
            <label htmlFor={field.name} className="text-sm font-medium">
              {field.label}
            </label>
            <input
              type={field.name === 'minRepos' ? 'number' : 'text'}
              id={field.name}
              value={field.value}
              onChange={(event) => field.onChange(event.target.value)}
              placeholder={field.name === 'minRepos' ? '10' : ''}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
        ))}
        
        <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        >Search
        </button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : error && (
        <p className="text-red-500 text-sm mt-4">Looks like we cant find the user.</p>
      ) }: userData && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">User Information</h2>
          <img src={userData.avatar_url} alt={userData.name} width="100" height="100" className="rounded-lg"/>
          <h3  className="text-sm font-medium">
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              {userData.name} ({userData.login}) ({userData.location}) ({userData.minRepos})

            </a>
          </h3>
        </div>
      ) : null
    </div>
  );
}
export default Search;