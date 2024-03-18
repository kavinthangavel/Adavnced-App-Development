import { Link } from 'react-router-dom';
import { GitHub, LinkedIn } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2024 Kavin</p>
          </div>
          <div className="footer-right">
            <div className="social-icons">
              <a href="https://kavinthangavel.tech">
                <GitHub />
              </a>
              <a href="https://kavinthangavel.tech" className="icon-link">
                <XIcon />
              </a>
              <a href="https://kavinthangavel.tech" className='icon-link'>
                <LinkedIn />
              </a>
            </div>
            <div className="privacy">
              <Link to="#">Privacy Policy</Link> • <Link to="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
