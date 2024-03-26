import { useState } from 'react'

import User from '../../assets/images/User.png'

import ProfileCourses from "../../components/user/ProfileCourses"

function Profile() {
    const [isForm, setIsForm] = useState(true);

    return (
        <div className="bg-sky-200 min-h-screen p-12 font-mono">
            <div className="text-2xl font-bold flex justify-center mb-5 tracking-tight">
                <p>Profile</p>
            </div>
            <div className="bg-white border bordeer-gray-200 rounded-lg p-24">
            <div>
               {
                    isForm ? (
                        <div className="grid grid-cols-5 mb-16">
                            <div className='flex items-center col-span-1'>
                                <img src={User} className='rounded-full w-24 h-24 mb-4'></img>
                            </div>
                            <div className="grid grid-cols-subgrid cols-span-4 leading-8 space-y-2">

                                <div>
                                    <p className="font-bold mt-8">General Information:</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Name</p>
                                    <p className=''>Rithik Raj</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">DOB</p>
                                    <p className=''>06/04/2004</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Gender</p>
                                    <p className=''>Male</p>
                                </div>

                                <div>
                                    <p className="font-bold mt-8">Contact Information:</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Email</p>
                                    <p className=''>rithu0644@gmail.com</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Mobile</p>
                                    <p className=''>9345049320</p>
                                </div>

                                <div>
                                    <p className="font-bold mt-8">Educational Information:</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">10th</p>
                                    <p className=''>95%</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">12th/Diploma</p>
                                    <p className=''>94%</p>
                                </div>

                                <div>
                                    <button className='bg-green-600 hover:bg-green-800 border border-gray-200 rounded-lg p-1 px-3 text-white mt-8' onClick={() => {setIsForm(!isForm)}}>
                                        Edit Details
                                    </button>
                                </div>
                            </div>
                        </div>

                    ) : (
        
                        <div className="grid grid-cols-5 mb-16">
                            <div className='flex items-center col-span-1'>
                                <img src={User} className='rounded-full w-24 h-24 mb-4'></img>
                            </div>
                            <div className="grid grid-cols-subgrid cols-span-4 leading-8 space-y-2">

                                <div>
                                    <p className="font-bold mt-8">General Information:</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Name</p>
                                    <input type="text" className='b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1 border-2 border-gray-600' placeholder='Rithik Raj'/>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">DOB</p>
                                    <input type="text" className='b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1 border-2 border-gray-600' placeholder='06/04/2004'/>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Gender</p>
                                    <select type="text" className='b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1 border-2 border-gray-600'>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Prefer not to say</option>
                                    </select>
                                </div>

                                <div>
                                    <p className="font-bold mt-8">Contact Information:</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Email</p>
                                    <input type="email" className='b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1 border-2 border-gray-600' placeholder='rithu0644@gmail.com'/>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">Mobile</p>
                                    <input type="text" pattern='[0-9]{10}' className='b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1 border-2 border-gray-600' placeholder='9345049320'/>
                                </div>

                                <div>
                                    <p className="font-bold mt-8">Educational Information:</p>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">10th</p>
                                    <input type="number" min="0" max="100" className='b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1 border-2 border-gray-600' placeholder='95'/>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <p className="font-bold">12th/Diploma</p>
                                    <input type="number" min="0" max="100" className='b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1 border-2 border-gray-600' placeholder='94'/>
                                </div>

                                <div>
                                    <button className='bg-green-600 hover:bg-green-800 border border-gray-200 rounded-lg p-1 px-3 text-white mt-8' onClick={() => {setIsForm(!isForm)}}>
                                        Save Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <hr className='bg-black border border-black mb-8'></hr>

                <div className='flex justify-center mb-8 font-bold text-lg'>
                    <h1>Course Status</h1>
                </div>

                <div className='flex flex-col space-y-3'>
                    <ProfileCourses />
                    <ProfileCourses />
                    <ProfileCourses />
                    <ProfileCourses />
                    <ProfileCourses />
                    <ProfileCourses />
                    <ProfileCourses />
                </div>
            </div>
            </div>
        </div>

        
    );
}

export default Profile;