import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


const Profile = () => {
    return (
      <div>
        <h1>Profile</h1>
        <nav>
          <ul>
            <li>
              <Link to="details">Details</Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  };
export default Profile;  
