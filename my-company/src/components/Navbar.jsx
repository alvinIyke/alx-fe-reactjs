import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <>
      <nav style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>MyCompanyLogo</h1>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex'
        }}>
          <li style={{ marginRight: '20px' }}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/">Home</Link></li>
          <li style={{ marginRight: '20px' }}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/about">About</Link></li>
          <li style={{ marginRight: '20px' }}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/services">Services</Link></li>
          <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
    );
  };
  
  export default Navbar;
  
  
