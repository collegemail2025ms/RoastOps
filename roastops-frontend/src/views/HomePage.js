// src/views/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>RoastOps</h1>
      <p>Manage tasks and inventory with ease.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ marginRight: '10px' }}>Login</button>
        </Link>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
