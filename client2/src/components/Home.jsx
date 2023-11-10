import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page of my React application.</p>
      <div>
        <Link to="/Register">Sign Up</Link>
      </div>
      <div>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Home;
