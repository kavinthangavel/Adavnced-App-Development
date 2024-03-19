import User from '../../assets/images/User.png'

function UserCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow m-5 p-8 tracking-tighter flex flex-col items-center">
            <img src={User} className='rounded-full w-24 h-24 mb-4'></img>
            <p>Kavin</p>
            <p>Age : 20</p>
            <a href="/admin/user/6" className="inline-flex text-white bg-sky-600 hover:bg-sky-800 hover:px-5 px-3 py-2 mt-5 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
                View Details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    )
}

export default UserCard