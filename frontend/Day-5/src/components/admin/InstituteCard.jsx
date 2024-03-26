import { Link } from "react-router-dom";
import college from "../../assets/images/College.jpg"

function InstituteCard({ onDelete }) {
  const handleDeleteClick = () => {
    // Call the onDelete function passed from the parent component
    onDelete();
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow m-5">
      <a href="#">
        <img className="rounded-t-lg" src={college} alt="" />
      </a>
      <div className="p-5 font-mono">
        <a href="#">
          <h3 className="mb-2 text-md font-bold tracking-tighter hover:tracking-normal">Sri Krishna College Technology</h3>
        </a>
        <p className="mb-5 font-normal text-gray-700 tracking-tighter">Technology Education for a Better Future. Sri Krishna College of Technology is the most sought after Institution among the premier technical Institutions in South India. </p>
        <div className="grid grid-cols-2 justify-center space-x-2 text-sm">
          <Link to="/admin/institute/1" className="inline-flex justify-center text-white bg-sky-600 hover:bg-sky-800  px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
            View Details
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link> 
          <button onClick={handleDeleteClick} className="inline-flex justify-center text-white bg-red-600 hover:bg-red-800 px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:ring-red-300 focus:outline-none">
            Delete
            <svg className="rtl:rotate-180 w-4 h-4 ms-2 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
              <g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M14 11V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4 7H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
            </svg>
          </button> 
        </div>
      </div>
    </div>
  );
}

export default InstituteCard;
