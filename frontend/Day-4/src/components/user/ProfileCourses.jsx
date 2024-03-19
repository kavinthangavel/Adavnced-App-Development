import { Link } from "react-router-dom"
function ProfileCourses() {
    return (
        <div className="w-full flex flex-row bg-sky-200 border border-gray-200 rounded-xl shadow">
            <div className="p-5 font-mono">
                <Link to="#">
                    <h3 className="mb-2 text-md font-bold tracking-tighter hover:tracking-normal">B.Tech. (IT)</h3>
                </Link>
                <p className="mb-2 font-normal text-gray-700 tracking-tighter">Sri Krishna College Technology</p>
                <p className="mb-2 font-normal text-gray-700 tracking-tighter">Status : Applied</p>
            </div>
        </div>
    )
}

export default ProfileCourses         