/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/Register.css'; 
import '../../index.css';
import Navbar from '../../components/user/NavBar';


const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    setEmailError('');
    setUsernameError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!email.trim()) {
      setEmailError('Please enter your email');
      return false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      setEmailError('Please enter a valid email');
      return false;
    }

    if (!username.trim()) {
      setUsernameError('Please enter your username');
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

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/register');
    }
  };

  return (
    <div className="signup-container">
      <Navbar />
      <h1 className="font-bold text-xxl mb-4">SignUp</h1> {/* Updated class name */}
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Updated class name */}
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required
          />
          <label className="error">{usernameError}</label>
        </div>
        <div className="form-group"> {/* Updated class name */}
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
        <div className="form-group"> {/* Updated class name */}
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-field" 
            required
          />
          <label className="error">{passwordError}</label>
        </div>
        <div className="form-group"> 
          <input
            type="text"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field" 
            required
          />
          <label className="error">{confirmPasswordError}</label>
        </div>
        <button type="submit" className="login-btn"> {/* Updated class name */}
          Signup
        </button>
      </form>
      <div className="bottom-text"> {/* Updated class name */}
        Oops! Already had an account ? <Link to="/login">Login</Link> 
      </div>
    </div>
  );
};

export default Register;
