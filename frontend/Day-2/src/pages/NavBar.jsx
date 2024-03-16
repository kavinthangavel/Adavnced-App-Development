import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../src/assets/css/NavBar.css'; 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  // handle opening the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // handle closing the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
              <>
                <Button
                  aria-controls="profile-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  endIcon={<FaceIcon style={{ fontSize: '33px' }} />}
                />
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={() => { /* Implement logout functionality */ }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link component={Link} to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
