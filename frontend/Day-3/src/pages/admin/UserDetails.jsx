import User from '../../assets/images/User.png'

function Profile() {
    return (
        <div className="bg-sky-200 min-h-screen p-12 font-mono">
            <div className="text-2xl font-bold flex justify-center mb-5 tracking-tight">
                <p>Profile</p>
            </div>
            <div className="bg-white border bordeer-gray-200 rounded-lg p-24">
                <div className="grid grid-cols-4 mb-16">
                    <div className='flex items-center col-span-1'>
                        <img src={User} className='rounded-full w-24 h-24 mb-4'></img>
                    </div>
                    <div className="grid grid-cols-subgrid cols-span-3 leading-8">

                        <div>
                            <p className="font-bold mt-8">General Information:</p>
                        </div>

                        <div className='grid grid-cols-2'>
                            <p className="font-bold">Name</p>
                            <p className=''>Kavin</p>
                        </div>

                        <div className='grid grid-cols-2'>
                            <p className="font-bold">DOB</p>
                            <p className=''>12/08/2003</p>
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
                            <p className=''>example@gmail.com</p>
                        </div>

                        <div className='grid grid-cols-2'>
                            <p className="font-bold">Mobile</p>
                            <p className=''>5648249825</p>
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

                    </div>
                </div>
        
                
            </div>
        </div>
    );
}

export default Profile;