import { Link } from 'react-router-dom';
import icon from "../../assets/images/logo.png";

function Sidebar() {
  return (
    <div className="flex font-mono min-h-screen">
      <div className="bg-blue-600 w-64 p-5 text-white">
        <div className="flex space-x-2 mb-8">
          <img className="h-6 w-6" src={icon} alt="icon" />
          <h1 className="text-white font-bold">EduAdmit Connect</h1>
        </div>

        <ul className="space-y-4 text-sm">
          <li>
            <Link to="/admin/dashboard" className="font-bold hover:text-sky-200 hover:underline hover:underline-offset-8">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users" className="font-bold hover:text-sky-200 hover:underline hover:underline-offset-8">Users</Link>
          </li>
          <li>
            <Link to="/admin/institutes" className="font-bold hover:text-sky-200 hover:underline hover:underline-offset-8">Institutes</Link>
          </li>
          <li>
            <Link to="/admin/courses" className="font-bold hover:text-sky-200 hover:underline hover:underline-offset-8">Courses</Link>
          </li>
        </ul>

        <div className="mt-64 pt-48">
          <p className="text-white font-bold mb-2">Welcome Admin</p>
          <ul>
            <li>
              <Link to="/login" className="font-bold text-sm hover:text-sky-200 hover:underline hover:underline-offset-8">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
