import "../../assets/css/Home.css";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import MultiLayerParallax from "../../components/MultiLayerParallax";
import Navbar from "../../components/user/NavBar";
import Footer from "../../components/user/Footer";


function Home() {
  return (
    <div className="App">
    <Navbar/>
      <MultiLayerParallax />
      <div className="w-full bg-[#06141D] flex justify-center items-center min-h-screen">
        <div className="max-w-4xl px-8 py-16 space-y-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to EduAdmit Connect</h1>
          <p className="text-lg">Simplify your journey to higher education with EduAdmit Connect. Explore our extensive selection of programs and courses designed to help you achieve your career goals. Our platform offers a diverse range of courses tailored to guide you on the path towards your desired career. We wish you all the best for your future endeavors!</p>
          <div className="flex justify-center space-x-6">
            <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Get Started</Link> {/* Changed href to Link and used to attribute */}
            <Link to="/contact" className="border border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold">Contact</Link> {/* Changed href to Link and used to attribute */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
