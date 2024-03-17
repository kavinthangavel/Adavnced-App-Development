import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component
import '../../assets/css/Login.css';
import '../../index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Please enter your email');
      return false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      setEmailError('Please enter a valid email');
      return false;
    }

    if (!password.trim()) {
      setPasswordError('Please enter a password');
      return false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your logic for logging in
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <h1 className="font-bold text-xl mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <label className="error">{emailError}</label>
        </div>
        <div className="form-group">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          <label className="error">{passwordError}</label>
        </div>
        <button type="submit" className="login-btn">
          Log in
        </button>
      </form>
      <div className="bottom-text">
        Don't have an account? <Link to="/register">Sign up</Link> {/* Use Link component */}
      </div>
    </div>
  );
};

export default Login;
