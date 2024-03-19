import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../../assets/css/NavBar.css"; // Import your Navbar CSS file
import { useSelector } from 'react-redux'; // Import useSelector hook to access Redux store

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.isLoggedIn); // Get login state from Redux store
  const userEmail = useSelector(state => state.userEmail); // Get user's email from Redux store

  // handle opening the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // handle closing the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const isHomePage = location.pathname === '/' || location.pathname === '/home';
    const navbarRight = document.querySelector('.navbar-right'); // Select navbar-right element
    const navbarLinks = navbarRight.querySelectorAll('ul li a'); // Select all anchor links within navbar-right

    if (isHomePage) {
      navbarLinks.forEach(link => {
        link.style.color = '#ffffff';
      });
    } else {
      navbarLinks.forEach(link => {
        link.style.color = ''; 
      });
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} className="logo" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul>
          <li className={location.pathname === '/courses' ? 'active' : ''}>
            <Link to="/courses">Courses</Link>
          </li>
          <li className={location.pathname === '/institutes' ? 'active' : ''}>
            <Link to="/institutes">Institutes</Link>
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
                  <MenuItem onClick={handleMenuClose}>Logged in as {userEmail}</MenuItem> {/* Display user's email */}
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
