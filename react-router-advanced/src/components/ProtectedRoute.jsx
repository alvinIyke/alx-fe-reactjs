import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Function that checks if the user is authenticated
const isAuthenticated = () => {
    // Replace with your authentication logic, for instance checking if a token exists in local storage
    return localStorage.getItem('authToken') !== null;
};