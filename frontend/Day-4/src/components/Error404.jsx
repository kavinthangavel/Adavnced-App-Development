// import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Error404.css'; // Import CSS file for styling
import errorImage from '../assets/images/error-image.jpg'; // Import the error image

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <img src={errorImage} alt="Error" className="error-image" />
        <h1 className="error-heading">404 - Not Found</h1>
        <p className="error-message">The page you are looking for does not exist.</p>
        <Link to="/" className="error-link">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Error404;
