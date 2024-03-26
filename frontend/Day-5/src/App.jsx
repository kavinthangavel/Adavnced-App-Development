import { useState, useEffect, lazy } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Error404 from './components/Error404';
import Loader from './components/Loader';
import UserLayout from './pages/users/UserLayout';
import AdminLayout from './pages/admin/AdminLayout'
import LazyLayout from './components/LazyLayout';


// Lazy-loaded components
const LazyLogin = lazy(() => import('./pages/auth/Login'));
const LazyRegister = lazy(() => import('./pages/auth/Register'));
const LazyHome = lazy(() => import('./pages/users/Home'));
const LazyContact = lazy(() => import('./pages/users/Contact'));
const LazyCourses = lazy(() => import('./pages/users/Courses'));
const LazyCourseDetails = lazy(() => import('./pages/users/CourseDetails'));
const LazyPayment = lazy(() => import('./pages/users/Payment'));
const LazyProfile = lazy(() => import('./pages/users/Profile'));
const LazyInstitutes = lazy(() => import('./pages/users/Institutes'));
const LazyInstituteDetails = lazy(() => import('./pages/users/InstituteDetails'));
const LazyDashboard = lazy(() => import('./pages/admin/Dashboard'));
const LazyUsers = lazy(() => import('./pages/admin/Users'));
const LazyACourses = lazy(() => import('./pages/admin/ACourses'));
const LazyAInstitutes = lazy(() => import('./pages/admin/AInstitutes'));
const LazyACourseDetails = lazy(() => import('./pages/admin/CourseDetails'));
const LazyAInstituteDetails = lazy(() => import('./pages/admin/InstituteDetails'));
const LazyUserDetails =lazy(() => import('./pages/admin/UserDetails'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true); 

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      const tokenExpiration = sessionStorage.getItem('tokenExpiration');
      if (Date.now() < tokenExpiration) {
        setIsLoggedIn(true);
        const userRole = sessionStorage.getItem('userRole');
        if (userRole === 'admin') {
          setIsAdmin(true);
        }
      }
    }
  }, []);

  const userRoutes = () => (
    <UserLayout>
      <Routes>
        <Route path="/" element={<LazyLayout component={LazyHome} />} />
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/contact" element={<LazyLayout component={LazyContact} />} />
        <Route path="/courses" element={<LazyLayout component={LazyCourses} />} />
        <Route path="/pay" element={<LazyLayout component={LazyPayment} />} />
        <Route path="/profile" element={<LazyLayout component={LazyProfile} />} />
        <Route path="/institutes" element={<LazyLayout component={LazyInstitutes} />} />
        <Route path="/course/:id" element={<LazyLayout component={LazyCourseDetails} />} />
        <Route path="/institute/:id" element={<LazyLayout component={LazyInstituteDetails} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </UserLayout>
  );

  const adminRoutes = () => (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/dashboard" element={<LazyLayout component={LazyDashboard} />} />
        <Route path="/users" element={<LazyLayout component={LazyUsers} />} />
        <Route path="/courses" element={<LazyLayout component={LazyACourses} />} />
        <Route path="/institutes" element={<LazyLayout component={LazyAInstitutes} />} />
        <Route path="/course/:id" element={<LazyLayout component={LazyACourseDetails} />} />
        <Route path="/institute/:id" element={<LazyLayout component={LazyAInstituteDetails} />} />
        <Route path="/user/:id" element={<LazyLayout component={LazyUserDetails} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AdminLayout>
  );

  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LazyLayout component={LazyHome} />} />
          <Route path="/login" element={<LazyLayout component={LazyLogin} />} />
          <Route path="/register" element={<LazyLayout component={LazyRegister} />} />
          <Route path="/load" element={<Loader />} />
          <Route path="/*" element={isLoggedIn ? userRoutes() : <Navigate to="/login" />} />
          <Route path="/admin/*" element={isLoggedIn && isAdmin ? adminRoutes() : <Navigate to="/login" />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
