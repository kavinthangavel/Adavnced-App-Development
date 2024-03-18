import { useState, useEffect } from 'react'; //use lazy later
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/users/Home';
import Contact from './pages/Contact';
import Navbar from './pages/NavBar';
import Courses from './pages/users/Courses';
import AdmissionForm from './pages/users/AdmissionForm';
import Footer from './pages/Footer';
import Error404 from './pages/Error404';
import Payment from './pages/users/Payment';
import Profile from './pages/users/Profile';
import Institutes from './pages/users/Institutes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      const tokenExpiration = sessionStorage.getItem('tokenExpiration');
      if (Date.now() < tokenExpiration) {
        setIsLoggedIn(true);
        // Check if the user is an admin based on your authentication logic
        // For example, if the user role is stored in the token or fetched from the server
        const userRole = sessionStorage.getItem('userRole');
        if (userRole === 'admin') {
          setIsAdmin(true);
        }
      }
    }
  }, []);


  const userRoutes = () => (
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );

  const adminRoutes = () => (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/institutes" element={<Institutes />} />
          <Route path="/form" element={<AdmissionForm />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/pay" element={<Payment />} />

          <Route
            path="/user/*"
            element={isLoggedIn ? userRoutes() : <Navigate to="/login" />}
          />

          <Route
            path="/admin/*"
            element={
              isLoggedIn && isAdmin ? (
                adminRoutes()
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
