// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '1rem', backgroundColor: '#003366' }}>
      <a href="#home" style={linkStyle}>Home</a>
      <a href="#sandwiches" style={linkStyle}>Sandwiches</a>
      <a href="#smoothies" style={linkStyle}>Smoothies</a>
      <a href="#location" style={linkStyle}>Location</a>
    </nav>
  );
};

const linkStyle = {
  margin: '0 1rem',
  color: '#FFF',
  textDecoration: 'none',
  fontSize: '1.2rem'
};

export default Navbar;

