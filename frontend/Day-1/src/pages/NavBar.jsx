import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';
import Button from '@mui/material/Button';
import '../../src/assets/css/NavBar.css'; 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <Link to="/">
      <img src={logo} className="logo" alt="Logo" />
    </Link>
      </div>
      <div className="navbar-right">
        <ul>
          <li className={location.pathname === '/form' ? 'active' : ''}>
            <Link to="/form">Admission Form</Link>
          </li>
          <li className={location.pathname === '/courses' ? 'active' : ''}>
            <Link to="/courses">Courses</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
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
