// import { useEffect,useState } from 'react'; //use lazy later
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/users/Home';
// import Profile from './pages/users/Profile';
import Contact from './pages/Contact';
import Navbar from './pages/NavBar';

import "./App.css";
import Courses from './pages/users/Courses';
import AdmissionForm from './pages/users/AdmissionForm';
import Footer from './pages/Footer';
import Error404 from './pages/Error404';
import Payment from "./pages/users/Payment";

// function userRoutes(){
//   return(
//     <Routes>
//     <Route path='/profile' element={<Profile/>} />
//     </Routes>
//     );
//   }
function App() {

  // const[isLoggedIn,setIsLoggedIn]=useState(false);
  
  // useEffect(()=>{
  //   const token = sessionStorage.getItem("authToken");
  //   if(token)
  //   setIsLoggedIn(true);
  // },[]);
  // <Route path='/user/' element={isLoggedIn ? userRoutes(): <Login/>}/>
  // function adminRoutes(){}


  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/form' element={<AdmissionForm/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/pay' element={<Payment/>}/>
    <Route path='*' element={<Error404 />} />

    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App 