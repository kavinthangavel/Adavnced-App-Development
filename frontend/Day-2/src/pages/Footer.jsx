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
              <GitHub />
              <XIcon />
              <LinkedIn />
            </div>
            <div className="privacy">
              <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
