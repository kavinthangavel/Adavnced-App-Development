import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../../src/assets/images/logo.png';
import '../../src/assets/css/NavBar.css'; 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/form">Admission Form</Link>
          </li>
          <li>
          <Link to="/courses">Courses</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link to="/profile">Profile</Link>
            ) : (
              <Button variant="contained" component={Link} to="/login">Login</Button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
